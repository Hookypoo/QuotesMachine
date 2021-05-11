const express = require("express");
const https = require("https");


const app = express();

app.get("/", function (req, res) {

    https.get("https://type.fit/api/quotes", function (response) {

        console.log(response);

    })

})




app.listen(3000, function () {

})