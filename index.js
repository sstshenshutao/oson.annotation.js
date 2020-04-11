
function parse(shortText) {
    let annotationParser = require('./src/annotation-parser');
    let scope = require('./src/scope');
    let newParser = annotationParser;
    bindScope(newParser, "Node",scope );
    return newParser.parse(shortText);
    function bindScope(parser, scopeName, scope) {
        let yy = parser.yy;
        if (yy[scopeName]) {
            console.log(`${scopeName} exists`)
        } else {
            yy[scopeName] = scope
        }
    }
}
module.exports = parse;
