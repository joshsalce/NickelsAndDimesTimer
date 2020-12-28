const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const timer = require(__dirname + "/time.js");


const aboutContent1 = "Nickels and Dimes is an exercise popularized by David Goggins, former Navy SEAL and author of Can't Hurt Me. The basic format of this workout is to do 5 pullups and 10 pushups EMOM (every minute on minute). 1 minute is one set, and the full workout proposes 10 sets minimum. Once it becomes easier, progressively overload the workout by increasing the number of sets or weight lifted. This can be through a bag full of books, dumbbells, any weight you choose.";
const aboutContent2 = "This is not affiliated with David Goggins in any way. I am just a fan who wanted to make something I could use.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/about", function(req, res){
  res.render("about", {
   aboutContent1: aboutContent1,
   aboutContent2: aboutContent2
  });
});


app.listen(4000, function() {
  console.log("Server started on port 4000");
});
