const express = require("express");
const dotenv = require("dotenv");
const hbs = require("hbs");
const path = require("path");
const weatherData = require("../utils/weatherData.js");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));

app.get("/", renderIndex);

app.get("/weather", handleWeatherRequest);

app.get("*", renderNotFound);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function renderIndex(req, res) {
  res.render("index", { title: "Weather App" });
}

function handleWeatherRequest(req, res) {
  const { address } = req.query;
  if (!address) {
    return res.send("Address is required");
  }
  weatherData(address, (error, result) => {
    if (error) {
      return res.send(error);
    }
    res.send(result);
  });
}

function renderNotFound(req, res) {
  res.render("404", { title: "Page not found" });
}
