const express = require('express');
const app = express();
const port = 3000;

const users = [{id:1,name:"seyed"},{id:2,name:"hassan"}]

app.get(`/`, (req, res) => {
  console.log(req);
  res.statusCode = 200;
  res.send({'result': 20})

});

app.get(`/users`, function(req,res){
  console.log(res);
  res.statusCode = 200;
  res.json({'key':['seyed','reza']})

});


// request with id
app.get(`/users/:id`, function(req, res) {
  const {id} = req.params;
  const user = users.find(user => user.id == id);
  if (!user) {
    res.status(404).json({message:"not found User"})
  } else {
    res.status(200).json({user})
  }
})


app.listen(`${port}`,() => {
  console.log(`server is run on port ${port}`)
});
