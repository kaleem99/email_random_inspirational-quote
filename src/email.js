const nodemailer = require('nodemailer');
require('dotenv').config();
const {textMessage} = require('../message');

const transport = nodemailer.createTransport({
  service: 'sendinblue',
  auth: {
    type: "login",
    user: process.env.SMTP_LOGIN,
    pass: process.env.SMTP_PASSWORD,
  }
});

function helpOptions(receiver){
var helpOtions = {
  from: process.env.SMTP_LOGIN,
  to: receiver,
  subject: 'Be inspired by daily mail',
  text: textMessage,
};
return helpOtions;
}

function transporter(receiver){
transport.sendMail(helpOptions(receiver), function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log("message sent");
  }
}); 
}
transporter(process.argv[2]);

module.exports = {transporter, helpOptions}