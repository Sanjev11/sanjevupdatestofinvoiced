const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Finvoiced-cluster001:Finvoiced1234@finvoiced-cluster001.xjlgm.mongodb.net/finvoiced_db?retryWrites=true&w=majority')

app.use("/", require("./routes/invoiceFileRoute"));

app.listen(3001, function() {
    console.log("express server is running on port 3000")
})
