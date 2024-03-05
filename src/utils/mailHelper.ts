import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: process.env.SES_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SES_USER,
      pass: process.env.SES_PASS
    }
});