const fs = require('fs');
const path = require('path');

const { getPage } = require('./utils')

const baseURL = `https://pybullet.org/Bullet/BulletFull/`

// write files
fs.mkdirSync(path.resolve(__dirname, '@types/ammo.js'), { recursive: true });
getPage(baseURL + `annotated.html`)
    .then(scrapeClassURLs)
    .then(classURLs => classURLs.forEach(url => 
        getPage(url)
            .then(scrapeClass)
            .then(clazz => 
                fs.writeFileSync(path.resolve(__dirname, '@types/ammo.js', clazz.name + '.d.ts'), serializeClass(clazz)))))


// TEST
/*
getPage(`https://pybullet.org/Bullet/BulletFull/classbtRigidBody.html`)
    .then($ => {
        console.log(serializeClass(scrapeClass($)))
    })
*/


// parse
function scrapeClassURLs($) {
    return $(`.directory tr a[href^="class"], .directory tr a[href^="struct"]`).toArray().map(el => baseURL + $(el).attr('href'))
}

function scrapeClass($) {
    let name = $(`.headertitle .title`).text().split(' ')[0];
    let members = $(`.memberdecls tr[class^="memitem"]`).toArray().map(el => $(el).text().trim())
        .filter(decl => !decl.match(/^struct /gi) && !decl.match(/[\s]+~[a-z0-9_]+[\s]+\(/gi))
        .map(parseMember)

    return {
        name,
        members
    }
}

function parseMember(member) {
    try {
        let methodExp = /^(?:const |virtual |unsigned )*([a-z0-9_]+)[\s]+[*&]?[\s]*\*?[\s]*([a-z0-9_]+)[\s]+\(([^)]*)\)/gi
        let result = methodExp.exec(member);
        if(result != null) {
            return {
                kind: 'method',
                name: result[2],
                returnType: result[1],
                arguments: result[3].split(/,[\s]*/gi).filter(arg => !!arg).map(parseArg)
            }
        } else {
            let propertyExp = /^(?:const |unsigned )*([a-z0-9_]*)[\s]*[*&]?[\s]*\*?[\s]*([a-z0-9_]+)/gi
            result = propertyExp.exec(member);
            return {
                kind: 'property',
                name: result[2],
                type: result[1],
            }
        }
    } catch(err) {
        console.error(`Failed to parse "${member}"`)
        return null;
    }
}

function parseArg(arg) {
    let argExp = /^(?:const |class )*([a-z0-9_]*)[\s]*[*&]?([a-z0-9_]*)/gi
    let result = argExp.exec(arg);

    return {
        name: result[2],
        type: result[1]
    }
}

// serialize
function serializeClass(clazz) {
    let decl = ``;

    decl += `declare module Ammo {\n`;
    decl += `  declare class ${clazz.name} {\n`;
    decl += clazz.members.map(member => '    ' + serializeMember(member) + ';\n').join('')
    decl += `  }\n`
    decl += `}\n`;

    return decl;
}

function serializeMember(member) {
    if(member.kind === 'method') {
        return `${member.name}(${member.arguments.map(serializeArg)}): ${convertType(member.returnType)}`;
    } else {
        return `public ${member.name}: ${convertType(member.type)}`;
    }
}

function serializeArg(arg) {
    return `${arg.name}: ${convertType(arg.type)}`
}

function convertType(type) {
    type = type.trim();

    switch(type) {
        case 'int':
        case 'long':
        case 'float':
        case 'double':
            return 'number';
        case 'bool':
            return 'boolean';
        case 'char':
            return 'string';
        default:
            return type;
    }
}