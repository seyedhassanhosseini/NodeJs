const express = require('express');
const app = express();
const port = 3001;

const users = [{id:1,name:"seyed"},{id:2,name:"hassan"}]

app.get(`/`, (req, res) => {
  console.log(req);
  res.statusCode = 200;
  res.send({'result': 20})

});

// app.get(`/users`, function(req,res){
//   console.log(res);
//   res.statusCode = 200;
//   res.json({'key':['seyed','reza']})

// });


// request with id
app.get(`/users/:id?`, function(req, res) {
  const {id} = req.params;
  let product = null;
  if (id) {
    const user = users.find(user => user.id == id);
    return res.status(404).json(user)
  } 
  res.send(users)


})


app.listen(`${port}`,() => {
  console.log(`server is run on port ${port}`)
});
