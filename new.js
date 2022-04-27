// // // const axios = require("axios");
// // // const { v4: uuidv4 } = require("uuid");
// // // const crypto = require("crypto");

// // // const twitter = () => {
// // //   const oauth_consumer_key = "rGb8ayXhhD2BefwOJY9V3JdEZ";
// // //   const oauth_timestamp = Math.floor(Date.now() / 1000);
// // //   const oauth_nonce = uuidv4();
// // //   const oauth_signature_method = "HMAC-SHA1";
// // //   const oauth_version = "1.0";
// // //   const oauth_consumer_secret ="fFsbDLmvNszGiXbaesK2LnwqncJI7VRWulrSagfVCyTyL9qwzl";

// // //   const parameters = {
// // //     oauth_consumer_key: oauth_consumer_key,
// // //     oauth_signature_method: oauth_signature_method,
// // //     oauth_timestamp: oauth_timestamp,
// // //     oauth_nonce: oauth_nonce,
// // //     oauth_version: oauth_version,
// // //     oauth_token: oauth_consumer_secret,
// // //   };

// // //   let ordered = {};
// // //   Object.keys(parameters)
// // //     .sort()
// // //     .forEach(function (key) {
// // //       ordered[key] = parameters[key];
// // //     });

// // //   let encodedParameters = "";
// // //   for (k in ordered) {
// // //     const encodedValue = escape(ordered[k]);
// // //     const encodedKey = encodeURIComponent(k);
// // //     if (encodedParameters === "") {
// // //       encodedParameters += `${encodedKey}=${encodedValue}`;
// // //     } else {
// // //       encodedParameters += `&${encodedKey}=${encodedValue}`;
// // //     }
// // //   }

// // //   const method = "POST";
// // //   const firstUrl = "https://api.twitter.com/oauth/request_token";
// // //   const base_url = firstUrl;
// // //   const encodedUrl = encodeURIComponent(base_url);
// // //   encodedParameters = encodeURIComponent(encodedParameters);

// // //   //AUTH SIGNATURE HEADER
// // //   const signature_base_string = `${method}&${encodedUrl}&${encodedParameters}`;
// // //   const secret_key = "1451472471572598822-JzGPnbOqaNSYeDTL5WD1EPSHv7u2fM"; //oauth_token;
// // //   const secret_token = "tglQaa0u8uBAh6jhBVTsYwBYpxXRqnfGAMy79l5PcCTLd"; //oauth_token_secret;
// // //   const signing_key = `${encodeURIComponent(secret_key)}&${encodeURIComponent(
// // //     secret_token
// // //   )}`;

// // //   const oauth_signature = crypto
// // //     .createHmac("sha1", signing_key)
// // //     .update(signature_base_string)
// // //     .digest("base64");
// // //   const encoded_oauth_signature = encodeURIComponent(oauth_signature);
// // //   console.log({ encoded_oauth_signature }, { oauth_signature });
// // //   // oauth_token="${parameters.oauth_token}

// // //   const header = `OAuth oauth_consumer_key="${parameters.oauth_consumer_key}",oauth_nonce="${parameters.oauth_nonce}",oauth_signature="${encoded_oauth_signature}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${parameters.oauth_timestamp}",oauth_version="1.0"`;

// // //   //   'Authorization: OAuth oauth_consumer_key="$oauth_consumer_key",
// // //   //    oauth_nonce="$oauth_nonce", oauth_signature="oauth_signature",
// // //   //     oauth_signature_method="HMAC-SHA1", oauth_timestamp="$timestamp",
// // //   //      oauth_version="1.0"'

// // //   const headers = {
// // //     Authorization: header,
// // //     // "Content-Type": "application/json",
// // //   };

// // //   console.log(headers);
// // //   //   `https://api.twitter.com/oauth/request_token?oauth_consumer_key=${oauth_consumer_key}&oauth_nonce=${oauth_nonce}&oauth_signature=${encoded_oauth_signature}&oauth_signature_method=${oauth_signature_method}&oauth_consumer_key=${oauth_consumer_key}&oauth_timestamp=${oauth_timestamp}&oauth_version=1.0`
// // //   //   https://api.twitter.com/oauth/request_token?
// // //   axios
// // //     .post(
// // //       `${`https://api.twitter.com/oauth/request_token?oauth_callback=${`https://api.mypennnytree.com`}`}`,
// // //       undefined,
// // //       {
// // //         headers,
// // //       }
// // //     )
// // //     .then((res) => {
// // //       console.log("RESPONSE RECEIVED: ", res.data);
// // //     })
// // //     .catch((err) => {
// // //       console.log("AXIOS ERROR: ", err);
// // //     });

// // //   // const options = {
// // //   //   method: "POST",
// // //   //   url: twitter_domian,
// // //   //   body: input,
// // //   //   headers: {
// // //   //     Authorization: header,
// // //   //     "Content-Type": "application/json",
// // //   //   },
// // //   // };
// // // };

// // // twitter();
// // ...........................AbortController.........AbortController.apply.
// // const axios = require("axios");
// // const crypto = require("crypto-js");
// // const oauth1a = require("oauth-1.0a");

// // const CONSUMERKEY = "J0c8PzEdjiI9pfNb1LGdXliT9";
// // const CONSUMERSECRET = "5JsahDp5MDfI42Z5Wjg3frLqG5MQIm4ogRAaqUvKjWI9GvcJOD";

// // class Oauth1Helper {
// //   static getAuthHeaderForRequest(request) {
// //     const oauth = oauth1a({
// //       consumer: { key: CONSUMERKEY, secret: CONSUMERSECRET },
// //       signature_method: "HMAC-SHA1",
// //       hash_function(base_string, key) {
// //         return crypto.algo.HMAC.create(crypto.algo.SHA1, key)
// //           .update(base_string)
// //           .finalize()
// //           .toString(crypto.enc.Base64);
// //       },
// //     });

// //     const authorization = oauth.authorize(request);
// //     //     {
// //     //     key: '1451472471572598822-JzGPnbOqaNSYeDTL5WD1EPSHv7u2fM',
// //     //     secret: 'tglQaa0u8uBAh6jhBVTsYwBYpxXRqnfGAMy79l5PcCTLd',
// //     // }
// //     return oauth.toHeader(authorization);
// //   }
// // }
// // const request = {
// //   url: "https://api.twitter.com/oauth/request_token",
// //   method: "POST",
// //   body: undefined,
// // };
// // // + `?oauth_callback=https://api.mypennnytree.com
// // const authHeader = Oauth1Helper.getAuthHeaderForRequest(request);
// // console.log(authHeader);
// // axios
// //   .post(request.url, request.body, { headers: authHeader })
// //   .then((res) => {
// //     console.log(res.data.split("&")[0].split("=")[1]);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // //   curl --request POST \
// // //   --url 'https://api.twitter.com/oauth/request_token?oauth_callback=$HTTP_ENCODED_CALLBACK_URL' \
// // //   --header 'Authorization: OAuth oauth_consumer_key="$oauth_consumer_key",
// // //   oauth_nonce="$oauth_nonce", oauth_signature="oauth_signature",
// // //   oauth_signature_method="HMAC-SHA1", oauth_timestamp="$timestamp", oauth_version="1.0"'

// // const Crypto = require("crypto");

// // function generate(crc_token = "456543frt", consumer_secret = "ertgvf45tfdw") {
// //   console.log({ crc_token }, { consumer_secret });
// //   const hmac = Crypto.createHmac("sha256", consumer_secret)
// //     .update(crc_token)
// //     .digest("base64");
// //   console.log(hmac);
// //   return hmac;
// // }

// // generate();

// const Crypto = require("crypto");
// const crypto = require("crypto-js");
// const oauth1a = require("oauth-1.0a");

// const CONSUMERKEY = process.env.CONSUMER_KEY || "J0c8PzEdjiI9pfNb1LGdXliT9";
// const CONSUMERSECRET =
//   process.env.CONSUMER_SECRET ||
//   "5JsahDp5MDfI42Z5Wjg3frLqG5MQIm4ogRAaqUvKjWI9GvcJOD";

// class Oauth1Helper {
//   static getAuthHeaderForRequest(request) {
//     const oauth = oauth1a({
//       consumer: { key: CONSUMERKEY, secret: CONSUMERSECRET },
//       signature_method: "HMAC-SHA1",
//       hash_function(base_string, key) {
//         return crypto.algo.HMAC.create(crypto.algo.SHA1, key)
//           .update(base_string)
//           .finalize()
//           .toString(crypto.enc.Base64);
//       },
//     });

//     const authorization = oauth.authorize(request);

//     console.log(oauth.toHeader(authorization));
//     return oauth.toHeader(authorization);
//   }
// }

// const request = {
//   url: "https://api.twitter.com/oauth/request_token",
//   method: "POST",
//   body: undefined,
// //   oauth_token:"errrr"
// };

// const token = ""

// const authHeader = Oauth1Helper.getAuthHeaderForRequest(request,token);

const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

const twitter_domain = "https://api.twitter.com/1.1/account_activity/webhooks";

const twitter = (oauth_token, oauth_token_secret) => {
  const oauth_timestamp = Math.floor(Date.now() / 1000);
  const oauth_nonce = uuidv4();
  const oauth_signature_method = "HMAC-SHA1";
  const oauth_version = "1.0";
  const oauth_consumer_key="J0c8PzEdjiI9pfNb1LGdXliT9"
//   const oauth_consumer_secret =
//     "5JsahDp5MDfI42Z5Wjg3frLqG5MQIm4ogRAaqUvKjWI9GvcJOD";

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

twitter(
  "1450451619582251013-H43rslxRw67dSvnIZpHujsAOLHo1Ih",
  "EcOrEeoidmwcu5encKy2G1LZzBhJ506336DBz6wum1ZIp"
);

