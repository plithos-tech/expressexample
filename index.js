const express = require("express");
const os = require("os");

const app = express();
const port = 3000; // Choose any available port number

app.get("/", (req, res) => {
  res.json({ Hello: "World" });
});

app.get("/env", (req, res) => {
  res.json({ env: process.env.ENV_ENV || "World" });
});

app.get("/items/:item_id", (req, res) => {
  const { item_id } = req.params;
  const { q } = req.query;
  res.json({ item_id: parseInt(item_id), q });
});

// SIGINT signal handler
process.on("SIGINT", () => {
  console.log("Received SIGINT signal. Shutting down gracefully...");
  // Perform any cleanup tasks or resource releases here (if necessary)
  process.exit(0);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
