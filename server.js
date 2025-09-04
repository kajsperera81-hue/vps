// server.js
const express = require("express");          // Express import කරන්න
const app = express();                        // Express app එක create කරන්න

// Root route එක handle කරන්න
app.get("/", (req, res) => {
  res.send("Hello from VPS! 🚀");             // Browser එකේ display වෙන message
});

// Server listen on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000"); // Terminal එකේ log
});
