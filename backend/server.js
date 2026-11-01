"use strict";

const express = require("express");
const { processRequest } = require("./backend.js");

const app = express();
app.use(express.json());
app.use(express.static("frontend"));

app.post("/api/expenses", (req, res) => {
  const result = processRequest(req.body);
  return res.status(result.success ? 200 : 400).json(result);
});

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
