const router = require("express").Router();

router.post('/signup', (req, res) => {
    const { firstName, email } = req.body;
  
    // Make sure fields are filled
    if (!firstName || !lastName || !email) {
      return err;
    }
  
    // Construct req data
    const data = {
      members: [
        {
          EMAIL: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
          }
        }
      ]
    };
  
    const postData = JSON.stringify(data);
  
    const options = {
      url: 'https://us4.api.mailchimp.com/3.0/lists/ba9ebb6631',
      method: 'POST',
      headers: {
        Authorization: 'auth fa71acd6d5b85a12072726f40c0133f7-us4'
      },
      body: postData
    };
  
    request(options, (err, response, body) => {
      if (err) {
        res.status(401).send({success: false, msg: 'Registration failed.'})
      } else {
        res.status(200).send({success: true, msg: 'Regisrtation successful'})}
        
    });
    res.send("mailchimp signup api");
  });

  module.exports = router;