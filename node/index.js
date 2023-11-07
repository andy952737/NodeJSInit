const http = require("http");
// const hostname = "127.0.0.1";
// const port = 8003;

const { Client } = require('pg');
//const config = require('./node/config.js'); // 导入你的配置文件
const path = require('path');
const configPath = path.join(__dirname, 'config.js'); //絕對路徑
const config = require(configPath);

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

//var http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('dist/public/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8082);
