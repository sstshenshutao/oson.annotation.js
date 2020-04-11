// Let's expose API to the world.
;(function() {
    'use strict';

var osonParser = {
    get: parse
};

if ('object' === typeof exports) {
    // If `exports` is an object, we are in Node.js context.
    // We are supposed to act as Node.js package.
    module.exports = osonParser;
} else if ('function' === typeof define && define.amd) {
    // If there is global function `define()` and `define.amd` is defined,
    // we are supposed to act as AMD module.
    define(function() {
        return osonParser;
    });
} else {
    // Last resort.
    // Let's create global `osonParser` object.
    this.osonParser = osonParser;
}

}).call((function() {
    'use strict';
    return (typeof window !== 'undefined' ? window : this);
})());
