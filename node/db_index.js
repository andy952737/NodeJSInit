const http = require('http');
const fs = require('fs');
const { Client } = require('pg');

// 创建 PostgreSQL 连接
const client = new Client({
  user: 'user',
  host: 'localhost', // 通常是 'localhost' 或数据库服务器的 IP 地址
  database: 'database_name',
  password: 'password',
  port: 5432, // 默认 PostgreSQL 端口
});

client.connect()
  .then(() => {
    console.log('成功连接到 PostgreSQL 数据库');
  })
  .catch((error) => {
    console.error('连接到 PostgreSQL 数据库时出错:', error);
  });

const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    // 执行查询
    const query = 'SELECT * FROM admins';
    client.query(query)
      .then((result) => {
        const data = result.rows;

        // 读取 HTML 模板
        fs.readFile('dist/public/index.html', 'utf-8', function (err, html) {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('内部服务器错误');
          } else {
            // 将查询结果注入到 HTML 模板
            const renderedHtml = html.replace('{{data}}', JSON.stringify(data));
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(renderedHtml);
          }
        });
      })
      .catch((error) => {
        console.error('查询时出错:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('查询时出错');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('页面未找到');
  }
});

server.listen(8082, function () {
  console.log('服务器运行在 http://localhost:8082/');
});
