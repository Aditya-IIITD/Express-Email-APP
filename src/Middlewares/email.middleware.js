import nodemailer from "nodemailer";

export const EmailMiddleware = (req, res, next) => {
  const data = req.body;
  const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "adityajanager@gmail.com", 
      pass: "lzts eous hdje ngyj",
    },
  });

  const mailOptions = {
    from: "adityajanager@gmail.com",
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
