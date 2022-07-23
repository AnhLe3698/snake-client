let connect = require('./client');
let setupInput = require('./input');

console.log("Connecting ...");
let conn = connect();

setupInput(conn);