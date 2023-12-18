// Importing nodemailer library
// const nodemailer = require('nodemailer');
import nodemailer from 'nodemailer'
import readline from 'readline'

// Function to send email
const sendEmail = async (recipientEmail) => {
  // Email service credentials
  const emailCredentials = {
    user: 'codingninjas2k16@gmail.com',
    pass: 'slwvvlczduktvhdj',
  };

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailCredentials.user,
      pass: emailCredentials.pass,
    },
  });

  // Email options
  const mailOptions = {
    from: emailCredentials.user,
    to: recipientEmail,
    subject: 'Coding Ninjas',
    text: 'The world has enough coders; be a coding ninja!',
  };

  try {
    // Sending email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Solution function - Prompt the user and send email
const solution = async () => {
    const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Prompt the user to enter the recipient's email address
  userInput.question('Enter recipient\'s email address: ', async (recipientEmail) => {
    await sendEmail(recipientEmail);
    userInput.close();
  });
};

// Run the solution function
solution();
