const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",// localhost,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully Connected!");
    conn.write("Name: AVL");
  });
  
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data.toString());
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;