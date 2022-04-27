const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

// const responses = require("./responses/");
const routes = require("./routes");

const app = express();

const gatewayUrl = process.env.API_GATEWAY_URL;
const serviceUrl = "https://users.mypennytree.com/";

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

// app.use(responses.notFound);
// app.use(responses.errorHandler);

process.env.TZ = "Africa/Lagos";

const port = process.env.PORT || 6000;
app.listen(port, () => {
  axios({
    method: "POST",
    url: gatewayUrl + "/register",
    headers: { "Content-Type": "application/json" },
    data: {
      apiName: "users",
      url: serviceUrl,
      enabled: true,
    },
  })
    .then((response) => {
      console.log(response.data.message);
    })
    .catch((error) => {
      msg = error.response?.data?.message;
      console.log(msg);
    });
  console.log(`Listening: http://localhost:${port}`);
});
