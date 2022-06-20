import express from "express";

import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("<h2>REST API Tutorial</h2>");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
