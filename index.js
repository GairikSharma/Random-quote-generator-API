const express = require("express");
const app = express();
const PORT = 5000;

const quotes = [
  "Believe you can, and you're halfway there.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
  "The future depends on what you do today.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Your time is limited, don't waste it living someone else's life.",
  "In the middle of every difficulty lies opportunity."
];

app.get("/", (req, res) => {
  const randomQuoteIdx = Math.floor(Math.random()* quotes.length);
  const randomQuoteLine = quotes[randomQuoteIdx]
  res.send(randomQuoteLine);
});

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
