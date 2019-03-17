const fs = require('fs');
const path = require('path');

const { getPage } = require('./utils')

const baseURL = `https://pybullet.org/Bullet/BulletFull/`

// TODO: operators, inheritance, generics

// write files
//*
fs.mkdirSync(path.resolve(__dirname, '@types/ammo.js'), { recursive: true });
getPage(baseURL + `annotated.html`)
    .then(scrapeClassURLs)
    .then(classURLs => classURLs.forEach(url => 
        getPage(url)
            .then(scrapeClass)
            .then(clazz => 
                fs.writeFileSync(path.resolve(__dirname, '@types/ammo.js', convertIdentifier(clazz.name) + '.d.ts'), serializeClass(clazz)))))
//*/

// TEST
/*
getPage(`https://pybullet.org/Bullet/BulletFull/classbtRigidBody.html`)
    .then($ => console.log(serializeClass(scrapeClass($))))
*//*
getPage(`https://pybullet.org/Bullet/BulletFull/classbtSimpleBroadphase.html`)
    .then($ => console.log(serializeClass(scrapeClass($))))
//*/


// parse
function scrapeClassURLs($) {
    return $(`.directory tr a[href^="class"], .directory tr a[href^="struct"]`).toArray()
        .map(el => baseURL + $(el).attr('href'))
        .filter((url, index, arr) => arr.indexOf(url) === index)
}

function scrapeClass($) {
    let name = $(`.headertitle .title`).text().split(' ')[0];
    console.log('---'+name+'---')
    let members = $(`.memberdecls`).toArray().filter(decl => 
            $(decl).text().includes('Public Member Functions') ||
            $(decl).text().includes('Public Attributes'))
        .map(section => $(section).find(`tr[class^="memitem"]:not(.inherit)`).toArray())
        .reduce((all, list) => all.concat(list), [])
        .map(el => $(el).text().trim())
        .filter(decl => 
            !decl.match(/^};[\s]*/) && 
            !decl.match(/^struct /gi) && 
            !decl.match(/~[a-z0-9_:]+[\s]+\(/gi))
        .map(parseMember)
        .filter(member => member != null)
        .sort((a, b) => scoreMember(a) - scoreMember(b))

    return {
        name,
        members
    }
}

function scoreMember(member) {
    let score = 0;

    switch(member.kind) {
        case 'constructor':
            break;
        case 'property':
            score += 10000000;
            break
        case 'method':
            score += 20000000;
            break;
    }

    if(member.name) {
        score += member.name.charCodeAt(0) * 1000;
    }

    if(member.args != null) {
        score += 100 - member.args.length;
    }

    return score;
}

function parseMember(member) {
    let methodExp = /^(?:const |virtual |unsigned )*([a-z0-9_:]+)[\s]+[*&]*[\s]*\*?[\s]*([a-z0-9_:]+)[\s]+\(([^)]*)\)(?:=.*)?/gi
    let result = methodExp.exec(member);
    if(result != null) {
        return {
            kind: 'method',
            name: result[2],
            returnType: result[1],
            arguments: result[3].split(/,[\s]*/gi).filter(arg => !!arg).map(parseArg)
        }
    } 

    let constructorExp = /^(?:const |virtual |unsigned )*[\s]*[*&]*[\s]*\*?[\s]*([a-z0-9_:]+)[\s]+\((.*)\)$/gi
    result = constructorExp.exec(member);
    if(result != null) {
        let argsArray = [];
        let argsString = result[2];
        let argExp = argExpression();
        let argResult;
        while(argResult = argExp.exec(argsString)) {
            let arg = parseArg(argResult[0]);
            if(arg != null) {
                argsArray.push(arg);
            } else {
                console.error(`^ in member "${member}"`)
            }
        }

        return {
            kind: 'constructor',
            arguments: argsArray
        }
    }

    let propertyExp = /^(?:const |unsigned )*([a-z0-9_:]*)[\s]*[*&]*[\s]*\*?[\s]*([a-z0-9_:]+)/gi
    result = propertyExp.exec(member);
    if(result != null) {
        return {
            kind: 'property',
            name: result[2],
            type: result[1],
        }
    }

    console.error(`Failed to parse member "${member}"`)
    return null;
}

function parseArg(arg) {
    console.log(arg)
    let argExp = argExpression();
    let result = argExp.exec(arg);

    if(result != null) {
        return {
            name: result[2],
            type: result[1]
        }
    }

    console.error(`Failed to parse argument "${arg}"`)
    return null;
}

const argExpression = () => 
    /(?:const |class |unsigned |short )*([a-z_][a-z0-9_:]*)[\s]*[*&]*([a-z0-9_]+)(?:=[a-z0-9_:]+\([^\)]*\)|=[^,]*)?(?:, )?/gi
    //                                          type             *&      name       =...                              ,
    
// serialize
function serializeClass(clazz) {
    let decl = ``;

    decl += `declare module Ammo {\n`;
    decl += `  declare class ${convertIdentifier(clazz.name)} {\n`;
    decl += clazz.members.filter(m => m.kind === 'constructor').map(member => '    ' + serializeMember(member) + '\n').join('')
    decl += '\n';
    decl += clazz.members.filter(m => m.kind === 'property').map(member => '    ' + serializeMember(member) + '\n').join('')
    decl += '\n';
    decl += clazz.members.filter(m => m.kind === 'method').map(member => '    ' + serializeMember(member) + '\n').join('')
    decl += `  }\n`
    decl += `}\n`;

    return decl;
}

function serializeMember(member) {
    switch(member.kind) {
        case 'method':
            return `${convertIdentifier(member.name)}(${member.arguments.map(serializeArg).join(', ')}): ${convertType(member.returnType)};`;
        case 'constructor':
            return `constructor(${member.arguments.map(serializeArg).join(', ')});`;
        case 'property':
            return `get_${member.name}(): ${convertType(member.type)};\tset_${convertIdentifier(member.name)}(value: ${convertType(member.type)}): ${convertType(member.type)};`;
    }
    if(member.kind === 'method') {
        return `${convertIdentifier(member.name)}(${member.arguments.map(serializeArg).join(', ')}): ${convertType(member.returnType)};`;
    } else if(member.kind === 'constructor') {
        return `constructor(${member.arguments.map(serializeArg).join(', ')})`
    } else {
        return `public ${convertIdentifier(member.name)}: ${convertType(member.type)}`;
    }
}

function serializeArg(arg) {
    return `${arg.name}: ${convertType(arg.type)}`
}

function convertIdentifier(name) {
    return name.replace(/::/g, '_')
}

function convertType(type) {
    type = convertIdentifier(type.trim());

    switch(type) {
        case 'int':
        case 'long':
        case 'float':
        case 'double':
        case 'btScalar':
            return 'number';
        case 'bool':
            return 'boolean';
        case 'char':
            return 'string';
        default:
            return type;
    }
}
