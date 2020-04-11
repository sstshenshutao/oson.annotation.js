let annotationParser = require('./src/annotation-parser');
let scope = require('./src/scope');
let newParser = annotationParser;
bindScope(newParser, "Node",scope );
function bindScope(parser, scopeName, scope) {
    let yy = parser.yy;
    if (yy[scopeName]) {
        console.log(`${scopeName} exists`)
    } else {
        yy[scopeName] = scope
    }
}
function parse(shortText) {
    return newParser.parse(shortText);
}
module.exports = parse;
