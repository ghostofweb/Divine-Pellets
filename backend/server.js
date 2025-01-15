import express, { json } from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';
import "dotenv/config";

const app = express();
app.use(json());

// Configure CORS to allow only specific origins
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://divine-pellets.vercel.app',
  ],
  methods: 'GET,HEAD,POST',
  credentials: true,
};

app.use(cors(corsOptions));

// Create email transporter with explicit SMTP configuration
const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('Transporter verification error:', error);
  } else {
    console.log('Server is ready to take messages');
  }
});

// Debugging: Log the transporter creation
console.log("Transporter created with user:", process.env.EMAIL_USER);

// Email sending endpoint
app.post('/send-email', async (req, res) => {
  const { name, phone, email, company, subject, message } = req.body;

  console.log("Received request to send email:", {
    name,
    email,
    subject,
    hasPhone: !!phone,
    hasCompany: !!company,
    messageLength: message?.length
  });

  // Validate required fields
  if (!name || !email || !message) {
    console.log("Missing required fields: name, email, or message");
    return res.status(400).json({ 
      error: 'Please provide all required fields',
      missing: {
        name: !name,
        email: !email,
        message: !message
      }
    });
  }

  // Configure email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Send from your Gmail address
    replyTo: email, // Replies will go to the sender
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission: ${subject || 'No Subject'}`,
    text: `
Contact Form Details:
-------------------
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Subject: ${subject || 'Not provided'}
-------------------
Message:
${message}
    `,
    // Optional: Add HTML version
    html: `
      <h2>Contact Form Details</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Company:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${company || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Subject:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${subject || 'Not provided'}</td>
        </tr>
      </table>
      <h3>Message:</h3>
      <p style="white-space: pre-wrap;">${message}</p>
    `
  };

  // Debugging: Log mail options before sending
  console.log("Preparing to send email with options:", {
    to: mailOptions.to,
    from: mailOptions.from,
    replyTo: mailOptions.replyTo,
    subject: mailOptions.subject
  });

  try {
    console.log("Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!", info);
    res.status(200).json({ 
      success: 'Email sent successfully!',
      messageId: info.messageId
    });
  } catch (error) {
    console.error("Error sending email:", {
      message: error.message,
      code: error.code,
      response: error.response,
      responseCode: error.responseCode,
      command: error.command
    });
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message,
      code: error.code
    });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'Email server is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Allowed origins: ${corsOptions.origin.join(', ')}`);
});

export default app;