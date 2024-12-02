const fs = require('fs');
const path = require('path');

function readFile(filePath) {
    const absolutePath = path.resolve(process.cwd(), filePath);
    return fs.readFileSync(absolutePath, 'utf-8').trim().split(/\r?\n/);
}

module.exports = { readFile };
