const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res)=> {
  try {
    res.status(200).send({ "slackUsername": "MikhailEric", "backend": true, "age": 27, "bio": "I am an aspiring backend developer"})
  }
  catch(error) {
    res.status(405).send({error: "Something went wrong"})
  }
});



app.listen(port, ()=> {
  console.log(`app is listening ${port}`)
});