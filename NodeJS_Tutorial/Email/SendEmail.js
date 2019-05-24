var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tanasak@leaderplanet.co.th',
    pass: '02nook6711'
  }
});

var mailOptions = {
  from: 'tanasak@leaderplanet.co.th',
  to: 'chotchai@leaderplanet.co.th',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});