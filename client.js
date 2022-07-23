const net = require("net");
const { IP, PORT, name } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,// localhost,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully Connected!");
    conn.write(`Name: ${name}`);
  });
  
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data.toString());
  });

  return conn;
};

module.exports = connect;