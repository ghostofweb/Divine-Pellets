import express, { json } from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';
import "dotenv/config";

const app = express();
app.use(json());

// Configure CORS to allow only specific origin
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://divine-pellets.vercel.app',
  ], // Replace with your frontend URL
  methods: 'GET,HEAD,POST', // Allowed HTTP methods
  credentials: true, // Allow cookies if needed
};

app.use(cors(corsOptions));

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Debugging: Log the transporter creation
console.log("Transporter created with user:", process.env.EMAIL_USER);

app.post('/send-email', async (req, res) => {
  const { name, phone, email, company, subject, message } = req.body;

  console.log("Received request to send email:", req.body);

  if (!name || !email || !message) {
    console.log("Missing required fields: name, email, or message");
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission: ${subject || 'No Subject'}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Subject: ${subject || 'Not provided'}
Message: ${message}
    `,
  };

  // Debugging: Log mail options before sending
  console.log("Mail options:", mailOptions);

  try {
    console.log("Attempting to send email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.status(200).json({ success: 'Email sent successfully!' });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
