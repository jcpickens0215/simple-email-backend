const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config()

const sender = async ({body}, res) => {
  
    // Create transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user:process.env.USER,
                pass:process.env.PASSWORD
            }
        });

    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
        console.log(error);
        } else {
        console.log("Server is ready to take our messages");
        }
    });

    // Preload email settings
    const mailOptions = {
        from : process.env.USER,
        to: "justin.pickens@gmx.com",
        subject : `New e-mail from ${body.name}, ${body.email}`,
        text : body.message,
    }

    // Send the email
    const info = await transporter.sendMail(mailOptions,(err, info) => {
        if (err){
           console.log(err.message);
           res.status(500);
           res.send(err.message);
        } else {
           res.status(200);
           console.log('Email sent');
           res.send(`Email sent`);
        }
    });
};

module.exports = { sender };