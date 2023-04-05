const express = require('express');
const app = express();
const port = 3000;

app.get(`/`, (req, res) => {
  console.log(req);
  res.send({'result': 20})

});

app.get(`/users`, function(req,res){
  console.log(res);
  res.json({'key':['seyed','reza']})

})


app.listen(`${port}`,() => {
  console.log(`server is run on port ${port}`)
});
