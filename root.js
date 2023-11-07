//Load HTTP module
const http = require("http");
const fs = require('fs');
const hostname = "127.0.0.1";
const port = 8003;
const { Client } = require('pg');
const config = require('./node/config.js'); // 导入你的配置文件

const client = new Client(config);
client.connect()
  .then(() => { 
    console.log('成功连接到PostgreSQL数据库');
  })
  .catch((error) => {
    console.error('连接到PostgreSQL数据库时出错:', error);
  }); 

const query = 'SELECT * FROM admins';
client.query(query)
  .then((result) => {
    console.log('查询结果:', result.rows);
  })
  .catch((error) => {
    console.error('查询时出错:', error);
  });

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  fs.readFile('dist/public/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  //Set the response HTTP header with HTTP status and Content type
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/plain");
  // res.end("Hello World\n");
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// http.createServer(function (req, res) {
//   fs.readFile('dist/public/index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8082);

//讀檔案
// fs.readFile('api/index.js', 'utf-8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });