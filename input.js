let connection;
const kb  = require("./constants");

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};



const handleUserInput = function(key) {
  // Chat key
  if (key === 'e') {
    connection.write("Say: nice!");
  }
  if (key === kb.keyBindings[0]) {
    connection.write("Move: up");
  }
  if (key === kb.keyBindings[1]) {
    connection.write("Move: left");
  }
  if (key === kb.keyBindings[2]) {
    connection.write("Move: down");
  }
  if (key === kb.keyBindings[3]) {
    connection.write("Move: right");
  }
  // Exit key ctr + c
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = setupInput;