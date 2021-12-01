const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server.')
    conn.write('Name: CGL');
    // conn.write('Move: up');
  });

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

module.exports = { connect };