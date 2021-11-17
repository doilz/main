var assert = require('assert');

assert.equal(50, 50); // ok

assert.equal(50, "50"); // ok

assert.equal(50, 70, "Each number is not equal"); // Error


 