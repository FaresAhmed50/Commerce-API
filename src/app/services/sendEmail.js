import Dotenv  from "dotenv";
import { createTransport } from "nodemailer";
Dotenv.config()

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.GmailEmail,
    pass: process.env.GmailPassword,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(email,html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Route E-commerce"', // sender address
    to: email, // list of receivers
    subject: "Verfication email", // Subject line
    html, // html body
  });

}

// main().catch(console.error);

export default main
