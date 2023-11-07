const express = require('express');
const app = express();
const fs = require('fs');

// 假设 data 包含要显示的数据
const data = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
];

app.get('/', (req, res) => {
  // 只选择要显示的字段（email）
  const filteredData = data.map((item) => ({ email: item.email }));

  // 读取 HTML 模板
  fs.readFile('dist/public/template.html', 'utf-8', (err, html) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      // 将数据嵌入到 HTML 模板中
      const renderedHtml = html.replace('{{data.email}}', JSON.stringify(filteredData));
      res.send(renderedHtml);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
