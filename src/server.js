import express from "express";

const PORT = 4000;
const app = express();

//app 설정

const gossipMiddleware = (req, res, next) => {
  console.log("I'm in the middle!");
  next();
};

const handleHome = (req, res, next) => {
  return res.send("<h1>I love you</h1>");
};

const handleLogin = (req, res) => {
  return res.send({ message: "login here." });
};

app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}🦄`);

app.listen(PORT, handleListening);
