const rates = require("./rates");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 8888;

app.get("/:symbol/:amount", async (req, res) => {
  let amount = req.params.amount;
  let symbol = req.params.symbol.toString().toUpperCase();
  res.send((await rates.convertTo(amount, symbol)).toString());
});

// app.get("/cad?:amount", async (req, res) => {
//   let amount = req.params.amount;
//   console.log(req.params);
//   res.send((await rates.convertTo(amount, "CAD")).toString());
// });

// app.get("/eur", async (req, res) => {
//   let amount = req.params.amount;
//   res.send((await rates.convertTo(amount, "EUR")).toString());
// });

app.listen(port, () => {
  console.log(`Currency converter listening on port ${port}`);
});
