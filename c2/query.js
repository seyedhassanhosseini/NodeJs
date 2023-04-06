const express = require('express');
const app = express();
const port = 3002;


app.get(`/`, (req, res) => {
  

});

app.listen(`${port}`,() => {
  console.log(`server is run on port ${port}`)
});
