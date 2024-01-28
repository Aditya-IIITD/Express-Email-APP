import nodemailer from "nodemailer";

export const EmailMiddleware = (req, res, next) => {
  const data = req.body;
  const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "janager8860000281@gmail.com",
      pass: "dbwr ipit wxov pfwp",
    },
  });

  const mailOptions = {
    from: "janager8860000281@gmail.com",
    to: data.email,
    subject: "Subscription Confirmation",
    text: `Dear ${data.name}, Thanx for subscribing.`,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email Sent Successfully");
    }
  });

  next();
};
