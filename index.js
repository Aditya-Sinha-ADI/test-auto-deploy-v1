import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Deployed successfully 🚀");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
