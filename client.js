const net = require('net');
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  })
  conn.on('connect', () => {
    console.log('Connection successfully established!');
    conn.write("Name: JSH");
    // setInterval(() => {conn.write('Move: up')}, 50);
  })
  return conn;
};

module.exports = {
  connect
};