const request = require("request");

const weatherData = (address, callback) => {
  const url =
    process.env.BASE_URL +
    encodeURIComponent(address) +
    "&APPID=" +
    process.env.SECRET_KEY;

  console.log(url);

  request({ url, json: true }, (err, data) => {
    if (err) {
      callback(true, "Unable to fetch data, Please try again" + err);
    }
    callback(false, data?.body);
  });
};

module.exports = weatherData;
