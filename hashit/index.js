var fs = require('fs');
var keccak256 = require('js-sha3').keccak256;

function hashFile(file) {
    var body = fs.readFileSync(file);
    return keccak256(body.toString('base64'));
}

console.log(`[${hashFile('statement.pdf')}]`);
