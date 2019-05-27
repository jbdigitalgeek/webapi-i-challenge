// implement your API here
const express = require("express");
const db = require("./data/db.js");


const server = express();

server.get("/api/users", (req, res) => {
  db
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({ error: "The users information could not be retrieved." });
    });
});

server.post('/api/users', (req, res) => {
    const user = req.body
})

server.listen(4000, () => {
  console.log("\n**server listening to port 4000**");
});
