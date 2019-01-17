'use strict';

console.log('I\'m the RulesEngineUtilMath test');
var index = require('./index');

//a >= b 
//diventa
//a >= b
var ret = index.fromSQLToJS("a >= b");
console.log(ret);

//a >= b and c = t
//diventa
////a >= b && c == t
ret = index.fromSQLToJS("a >= b and c = t");
console.log(ret);

//a <= b and c = t
//diventa
////a <= b && c == t
ret = index.fromSQLToJS("a <= b and c = t");
console.log(ret);

//a = b and c = t
//diventa
////a == b && c == t
ret = index.fromSQLToJS("a = b and c = t");
console.log(ret);
 