const express = require("express");
const router = express.Router();
const axios = require("axios");
const crypto = require("crypto-js");
const oauth1a = require("oauth-1.0a");
const { Oauth1Helper, generate } = require("../helpers/index");
router.get("/", (req, response) => {
  console.log("retro")
  const request = {
    url: "https://api.twitter.com/oauth/request_token",
    method: "POST",
    body: undefined,
  };

  const authHeader = Oauth1Helper.getAuthHeaderForRequest(request);
  console.log(authHeader);
  axios
    .post(request.url, request.body, { headers: authHeader })
    .then((res) => {
      const oauth_token = res.data.split("&")[0].split("=")[1];
      console.log({ oauth_token });
      response.redirect(
        `https://api.twitter.com/oauth/authorize?oauth_token=${oauth_token}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
});

/**
 * Receives challenge response check (CRC)
 **/
router.get("/webhooks/twitter", (req, res) => {
  // third-legged stage of User Authentication
  if (req.params.oauth_token && req.params.oauth_verifier) {
    axios
      .post(
        `https://api.twitter.com/oauth/access_token?oauth_verifier=${oauth_verifier}&oauth_token=${oauth_token}`,
        undefined,
        { headers: "" }
      )
      .then((res) => {
        const oauth_token = res.data.split("&")[0].split("=")[1];
        const oauth_token_secret = res.data.split("&")[1].split("=")[1];
        twitterAuthToken(oauth_token, oauth_token_secret);
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (req.params.crc_token) {
    //   Verification of Webhook url using CRC
    const responseToken = generate(
      req.params.crc_token,
      process.env.CONSUMERSECRET
    );
    const responseObj = {
      response_token: "sha256=" + responseToken,
    };

    res.status(200).send(generate());
  } else {
    res.status(400);
    // res.send("Error: crc_token missing from request.");
  }
});

//Subscribe User to Twitter events
router.post("/webhooks/twitter", (req, res) => {
  //   const { id: webhook_id, url, valid, created_at } = req.body;
  if (id && url && valid && created_at) {
    axios
      .post(
        `https://api.twitter.com/1.1/account_activity/webhooks/${webhook_id}/subscriptions/all.json`,
        undefined
        // { headers: req.headers }
      )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  } else {
    throw res;
  }
});

// router.put("/webhooks/twitter", (req, res) => {
//   const { id } = req.params;
//   if (id) {
//   } else {
//   }
// });

module.exports = router;
