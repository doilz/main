var assert = require('assert');

var x = {a: {n: 0}};
var y = {a: {n: 0}};
var z = {a: {n: 1}};
var zz = {a: {n: 1}};


assert.deepEqual(x, y);
assert.deepEqual(x, z, "x not equal z!!");

console.log("hello world");