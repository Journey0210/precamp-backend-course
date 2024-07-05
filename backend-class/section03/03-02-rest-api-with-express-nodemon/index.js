// const express = require('express') => Common JS
import express from "express"; //module

const app = express();

app.get("/test", function (req, res) {
  res.send("Hello World~~~!!!!!");
});

app.listen(3000); //3000은 port번호
