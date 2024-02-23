const rates = require("./rates");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 8888;

// Get Route for accessing conversion rates
app.get("/:symbol/:amount", async (req, res) => {
  let amount = req.params.amount;
  let symbol = req.params.symbol.toString().toUpperCase();
  res.send((await rates.convertTo(amount, symbol)).toString());
});

app.listen(port, () => {
  console.log(`Currency converter listening on port ${port}`);
});
