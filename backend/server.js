import express, { json } from 'express';
import pkg from '@getbrevo/brevo'; // Import Brevo package
import cors from 'cors';
import "dotenv/config";

const { TransactionalEmailsApi, SendSmtpEmail } = pkg; // Destructure the necessary classes

const app = express();
app.use(json());

// Configure CORS to allow only specific origins
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://divine-pellets.vercel.app',
    'https://divine-pellets.vercel.app/send-data',
    "https://www.divinepellets.com"
  ], // Replace with your frontend URL
  methods: 'GET,HEAD,POST', // Allowed HTTP methods
  credentials: true, // Allow cookies if needed
};

app.use(cors(corsOptions));

// Initialize Brevo API client with API key (directly use the API key for authentication)
const apiInstance = new TransactionalEmailsApi();
apiInstance.authentications['apiKey'].apiKey = process.env.BREVO_API_KEY; // Your Brevo API key from .env file

app.post('/send-email', async (req, res) => {
  const { name, phone, email, company, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  // Create email content
  const sendSmtpEmail = new SendSmtpEmail();
  sendSmtpEmail.sender = { email: process.env.EMAIL_USER }; // Sender's email (your Brevo email)
  sendSmtpEmail.to = [{ email: process.env.RECIPIENT_EMAIL }]; // Recipient email (to which the email is sent)
  sendSmtpEmail.subject = `Contact Form Submission: ${subject || 'No Subject'}`;
  sendSmtpEmail.htmlContent = `
    <html>
      <body>
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      </body>
    </html>
  `;

  // Send email using Brevo's transactional email API
  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email sent successfully: ', response); // You can log the response for debugging
    res.status(200).json({ success: 'Email sent successfully!' });
  } catch (error) {
  console.error('Error sending email: ', error?.response?.body || error.message || error);

  const errorMessage =
    error?.response?.body?.message ||
    error?.response?.body?.code ||
    error?.message ||
    'Failed to send email';

  res.status(500).json({ error: errorMessage });
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
