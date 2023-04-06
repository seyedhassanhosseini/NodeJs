const express = require('express');
const app = express();
const port = 3002;
const queryString = require('querystring')


app.get(`/foo`, (req, res) => {
  console.log(queryString.parse("key=value&key1=value1&key2=value2"))
  console.log(queryString.stringify({
    key: "value",
    key1:"value1"
  }));
  const {key} = req.query;
  res.send(key)
});

app.listen(`${port}`,() => {
  console.log(`server is run on port ${port}`)
});
