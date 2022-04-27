const Crypto = require("crypto");
const crypto = require("crypto-js");
const oauth1a = require("oauth-1.0a");
const CONSUMERKEY = process.env.CONSUMER_KEY;
const CONSUMERSECRET = process.env.CONSUMER_SECRET;


class Oauth1Helper {
  static getAuthHeaderForRequest(request) {
    const oauth = oauth1a({
      consumer: { key: CONSUMERKEY, secret: CONSUMERSECRET },
      signature_method: "HMAC-SHA1",
      hash_function(base_string, key) {
        return crypto.algo.HMAC.create(crypto.algo.SHA1, key)
          .update(base_string)
          .finalize()
          .toString(crypto.enc.Base64);
      },
    });

    const authorization = oauth.authorize(request);

    return oauth.toHeader(authorization);
  }
}

const generate = (crc_token, consumer_secret) => {
  const hmac = Crypto.createHmac("sha256", consumer_secret)
    .update(crc_token)
    .digest("base64");

  return hmac;
};

const twitter_domain = "https://api.twitter.com/1.1/account_activity/webhooks";

const twitterAuthToken = (oauth_token, oauth_token_secret) => {
  const oauth_timestamp = Math.floor(Date.now() / 1000);
  const oauth_nonce = uuidv4();
  const oauth_signature_method = "HMAC-SHA1";
  const oauth_version = "1.0";
  const oauth_consumer_key = process.env.CONSUMER_KEY;
  
  let parameters = {
    oauth_consumer_key: oauth_consumer_key,
    oauth_signature_method: oauth_signature_method,
    oauth_timestamp: oauth_timestamp,
    oauth_nonce: oauth_nonce,
    oauth_version: oauth_version,
    oauth_token: oauth_token,
  };

  let ordered = {};
  Object.keys(parameters)
    .sort()
    .forEach(function (key) {
      ordered[key] = parameters[key];
    });

  let encodedParameters = "";
  for (k in ordered) {
    const encodedValue = escape(ordered[k]);
    const encodedKey = encodeURIComponent(k);
    if (encodedParameters === "") {
      encodedParameters += `${encodedKey}=${encodedValue}`;
    } else {
      encodedParameters += `&${encodedKey}=${encodedValue}`;
    }
  }

  const method = "POST";
  const base_url = twitter_domain;
  const encodedUrl = encodeURIComponent(base_url);
  encodedParameters = encodeURIComponent(encodedParameters);

  const signature_base_string = `${method}&${encodedUrl}&${encodedParameters}`;
  const secret_key = oauth_token;
  const secret_token = oauth_token_secret;
  const signing_key = `${encodeURIComponent(secret_key)}&${encodeURIComponent(
    secret_token
  )}`;

  const oauth_signature = crypto
    .createHmac("sha1", signing_key)
    .update(signature_base_string)
    .digest("base64");
  const encoded_oauth_signature = encodeURIComponent(oauth_signature);

  const header = `OAuth oauth_consumer_key="${parameters.oauth_consumer_key}",oauth_token="${parameters.oauth_token}",oauth_signature_method="HMAC-SHA1",oauth_timestamp="${parameters.oauth_timestamp}",oauth_nonce="${parameters.oauth_nonce}",oauth_version="1.0",oauth_signature="${encoded_oauth_signature}"`;

  console.log({ header });
};



module.exports = {
  Oauth1Helper,
  generate,
  twitterAuthToken,
};
