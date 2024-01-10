const express = require("express");
const app = express();
const port = 8000;

const Vigenere = require("caesar-salad").Vigenere;
const password = "password";

app.get("/:content", (req, res) => {
  res.send("Your message: " + req.params.content);
});

app.get("/encode/:text", (req, res) => {
  const codedText = Vigenere.Cipher(password).crypt(req.params.text);
  res.send("Your message was coded to: " + codedText);
});

app.get("/decode/:text", (req, res) => {
  const uncodedText = Vigenere.Decipher(password).crypt(req.params.text);
  res.send("Your message was decoded. Original text: " + uncodedText);
});

app.listen(port, () => {
  console.log("Server online on " + port);
});
