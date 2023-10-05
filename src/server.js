import express from "express";

const PORT = 4000;
const app = express();

//app 설정

//this is middleware
const gossipMiddleware = (req, res, next) => {
  console.log(`someone is goin to: ${req.url}`);
  next();
};

//this is finalware
const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

const handleLogin = (req, res) => {
  return res.send({ message: "login here." });
};

app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}🦄`);

app.listen(PORT, handleListening);
