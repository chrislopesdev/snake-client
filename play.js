const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");

// call connect function
setupInput(connect());
