// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

// #######################################################################
const sendMail = async (recipientEmail) => {
  // 1. Email service credential
  const emailCredentials = {
      user : 'codingninjas2k16@gmail.com',
      pass : 'slwvvlczduktvhdj'
    };

 
  // 2. Create a transport object
  const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
      user : emailCredentials.user,
      pass : emailCredentials.pass
    }
  })

  
  // 3 Email option
  const mailOptions = {
    from : emailCredentials.user,
    to : recipientEmail,
    subject : 'Coding Ninjas',
    text : 'The world has enough coder; be a coding ninja!'
  }


  // 4. send email
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Success: Email sent to ${recipientEmail}`);
  } catch (err) {
    console.log('Failed: ' + err);
  }
}
// #######################################################################

const Solution = () => {
  // read input from command line
  const userInput = readline.createInterface({
    input : process.stdin,
    output : process.stdout
  });

  userInput.question('Please enter your mail ', async (mail) => {
    await sendMail(mail);
    userInput.close();
  });
};

export default Solution;
