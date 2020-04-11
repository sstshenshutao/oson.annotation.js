__oson.annotation__ compiler      
==========      
      
Abstract      
--------     
This is a javascript version of compiler for the language __oson.annotation__. The __oson.annotation__ data will be translated to [JSON Schema](https://json-schema.org/)  

>__oson.annotation__ is small language which is used in language [__oson__](https://github.com/sstshenshutao/oson).   
      
>__oson__ is a micro-language to describe the schema of JSON. It allows you to write down the JSON and the schema of JSON inside only one file(with annotation). oson is a subset of JSON-Schema, so it can be compiled to JSON-schema, it is inspired by "orderly" and annotation.      
      
  
oson.annotation can be compiled to a [JSON](https://www.json.org/json-zh.html), which is also a part of JSON Schema with path: [JSON Pointer (#/properties/somekey)](https://tools.ietf.org/html/rfc6901).  
      
For more details, see [oson.annotation/doc.md](https://github.com/sstshenshutao/oson.annotation/blob/master/README.md)  
  
## how to use?
This public package expose the function parse  

>let parse = require('oson.annotation.js.test');  
console.log(parse("@String"));


