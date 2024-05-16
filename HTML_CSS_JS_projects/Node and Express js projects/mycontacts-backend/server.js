const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", require ("./routes/contactsroutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log("The Server is running on the port : " + port);
});