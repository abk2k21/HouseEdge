const express = require("express");
const cors = require("cors");

const app = express();

// === MIDDLEWARE ===
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "https://houseedge.org",
    "https://www.houseedge.org",
    "http://houseedge.org",
    "http://www.houseedge.org",
  ],
  credentials: true
}));

app.use(express.json()); 

// === BASIC ROUTES ===
app.get("/", (req, res) => {
  res.send("houseedge backend is running");
});

app.get("/api", (req, res) => {
  res.json({ 
    message: "houseedge API is running",
    endpoints: ["GET /", "GET /api", "GET /api/health"],
  });
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});


// === 404 HANDLER ===
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    requested: `${req.method} ${req.originalUrl}`
  });
});

// === START SERVER ===
const PORT = process.env.PORT || 21051;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});