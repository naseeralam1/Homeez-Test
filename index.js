const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require('path');


//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//CREATE A QUOTE
app.post("/quotes", async (req, res) => {
  try {
    const { quotation_Info, quotation_Valid } = req.body;
    const newQuote = await pool.query(
      "INSERT INTO Quotation (Quotation_Info, quotation_Valid) VALUES($1, $2) RETURNING *",
      [quotation_Info, quotation_Valid]
    );
    res.json(newQuote.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//GET ALL QUOTAIONS
app.get("/quotes", async (req, res) => {
  try {
    const allQuotes = await pool.query("SELECT * FROM quotation");
    res.json(allQuotes.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*',(req,res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
