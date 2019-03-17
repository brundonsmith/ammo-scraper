const https = require('https');
const cheerio = require('cheerio');

function getPage(url) {
    return new Promise(resolve => 
        https.get(url, res => {
            let html = ``;
        
            res.on('data', chunk => html += chunk);
            res.on('end', () => resolve(cheerio.load(html)));
        })
    )   
}

module.exports = { getPage }