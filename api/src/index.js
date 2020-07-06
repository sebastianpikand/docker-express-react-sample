import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ version: "1.0" });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hi" });
});

app.get("/api/hello-world", (req, res) => {
  res.json({ message: "Hello World" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
