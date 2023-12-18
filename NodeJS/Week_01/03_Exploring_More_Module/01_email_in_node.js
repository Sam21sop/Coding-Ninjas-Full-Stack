// import nodemailer
const nodemailer = require('nodemailer')


// configure email and send it
async function sendMail() {
    // create an email transporter
    // SMTP ( Simple Mail Tranport Protocols)
    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'sender@gmail.com',
            pass : 'akjdhfnckjah'
        }
    })

    // configure email content
    const mailOption = {
        from : 'sender@gmail.com',
        to : 'receiver@gmail.com',
        subject : 'Welcome to NodeJs',
        text : 'this is email using nodemailer in nodejs'
    }

    // send the email
    try {
        const result = await transporter.sendMail(mailOption);
        console.log('email send successfully');
    } catch (err) {
        console.log('Email send Failed: ' + err);
    }
}

sendMail()