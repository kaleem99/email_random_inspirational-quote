let nodemailer = require('nodemailer'); 

let transporter = nodemailer.createTransport({
    service: 'sendinblue',
    secure: false,
    port: 587,
    auth: {
        user: process.env.SMTP_LOGIN,
        pass: process.env.SMTP_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});
let HelpOptions = {
    from: process.env.SMTP_LOGIN,
    to: process.argv[2],
    subject: 'Lorem ipsum',
    text: process.env.SMTP_QUOTE
};
transporter.sendMail(HelpOptions, (error, info) => {
    if(error){
        return console.log(error);
    }
    console.log("The message was sent");
    console.log(info);
});