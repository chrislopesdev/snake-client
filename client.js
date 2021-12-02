// create net variable importing node.js net library
// required to create network
const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  // creates connection (conn object) - host & port required
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // triggers on connection to network
  // event handler - on "connect" + function of what to do when event happens
  conn.on("connect", () => {
    console.log('Successfully connected to game server.');
    conn.write('Name: CGL');
    // conn.write('Move: up');
  });
  
  // event handler - on "data"
  // get data from network
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });


  conn.on("end", () => {
    // console.log('disconnected from server');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

// export our connect function
module.exports = { connect };