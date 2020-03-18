const router = require("express").Router();
const request = require("request")



router.post('/signup', (req, res) => {
    const { firstName, email } = req.body;
  
    // Make sure fields are filled
    if (!firstName || !email) {
      return err;
    }

    var options = { method: 'POST',
      url: 'https://us4.api.mailchimp.com/3.0/lists/ba9ebb6631/members',
      headers: 
       { 'Postman-Token': 'd7626dd0-7fb0-4289-b5ec-98db2502efc9',
         'cache-control': 'no-cache',
         Authorization: 'Basic YW55c3RyaW5nOmZhNzFhY2Q2ZDViODVhMTIwNzI3MjZmNDBjMDEzM2Y3LXVzNA==',
         'Content-Type': 'application/json' },
      body: 
       { email_address: email,
         status: 'subscribed',
         merge_fields: { FNAME: firstName } },
      json: true };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      // console.log(body);
    });
    
    res.send("mailchimp signup api");
  });

  module.exports = router;