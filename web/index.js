import parser from './annotation-parser.js'
import {Node} from "./scope.js";
function bindScope(parser, scopeName, scope) {
    let yy = parser.yy;
    if (yy[scopeName]) {
        console.log(`${scopeName} exists`)
    } else {
        yy[scopeName] = scope
    }
}

export function compile(longText) {
    let newParser = new parser.Parser();
    bindScope(newParser, "Node", Node);
    let osonText = longText;
    let annotationArray = osonText.split('=====');
    // console.log(annotationArray)
    let retText="";
    annotationArray.forEach(v=>{
        let processValue= v.trim();
        if (processValue.length===0){
            //skip the blank line
            return;
        }
        let result = JSON.stringify(newParser.parse(processValue), undefined, "    ");
        retText+=`${result}\n=====\n`;
    });
    return retText;
}
