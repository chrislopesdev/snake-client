// Stores active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  // node process
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // brings input data from keys
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  // move up
  if (key === 'w') {
    connection.write('Move: up');
  }
  // move left
  if (key === 'a') {
    connection.write('Move: left');
  }
  // move down
  if (key === 's') {
    connection.write('Move: down');
  }
  // move right
  if (key === 'd') {
    connection.write('Move: right');
  }
  // "eat my shorts"
  if (key === 'f') {
    connection.write('Say: Eay my shorts');
  }
  // "yeah buddy"
  if (key === 'c') {
    connection.write('Say: Yeaaaaah buddy!');
  }
};

module.exports = { setupInput };