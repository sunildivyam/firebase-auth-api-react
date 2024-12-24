const express = require('express');
const cors = require('cors');
const authorize = require('./authorize');

const app = express();
const demoBlogs = [
  {
    id: '1234',
    title: 'Blog title 1',
    summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    id: '5678',
    title: 'Blog title 2',
    summary: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: '1111',
    title: 'Blog title 3',
    summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    id: '2222',
    title: 'Blog title 4',
    summary: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  }
];

app.use(cors(['http://localhost:5173']))

app.use(authorize);
app.use('/blogs', (req, res, next) => {
  return res.json(demoBlogs);
});

const port = 3000;
app.listen(port, (error) => {
  if (error) {
    console.log(`App Failed at port :${port}`)
  } else {
    console.log(`App running at http://localhost:${port}`);
  }
})
