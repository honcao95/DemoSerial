var options = {
  host: '192.168.0.168',
  path: '/piglet',
  port: '8888',
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    // "Content-Length": Buffer.byteLength(dataStr)
  }
};

module.exports = options;
