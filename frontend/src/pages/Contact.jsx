import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { toast } from 'react-toastify';

const theme = createTheme({
  palette: {
    primary: {
      main: '#234336',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#234336',
            },
            '& fieldset': {
              transition: 'border-color 0.3s ease-in-out',
            },
          },
          '& label': {
            transition: 'color 0.3s ease-in-out',
          },
        },
      },
    },
  },
});


const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [copiedItem, setCopiedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');  // Set sending status initially

    try {
      const response = await axios.post('https://divine-pellets.vercel.app/send-email', formData);

      console.log(response); // Check the response structure

      if (response.data.success) {
        setStatus('success');
        toast.success("Thank you for contacting us! We will get back to you soon.");
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle the error more precisely if the backend returns a message
      if (error.response) {
        setStatus(`error: ${error.response.data.message || 'Something went wrong'}`);
      } else {
        setStatus('error');
      }
    }
  };



  const contactCards = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: '#ffffff' }} />,
      title: "Our Address",
      content: "123 Business Street, Suite 100, City, State 12345",
      copyValue: "123 Business Street, Suite 100, City, State 12345"
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: '#ffffff' }} />,
      title: "Contact",
      content: "+1 (555) 123-4567",
      copyValue: "+15551234567"
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: '#ffffff' }} />,
      title: "Email",
      content: "contact@yourcompany.com",
      copyValue: "contact@yourcompany.com"
    }
  ];

  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(index);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <Title
          title="Contact Us"
          bodyText="Contact us about anything related to our company or services. We do our best to get back to you as soon as possible"
        />

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactCards.map((card, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 8px 12px -1px rgba(35, 67, 54, 0.2)'
              }}
              key={index}
              className="relative overflow-hidden rounded-lg p-6 flex flex-col items-center text-center text-white"
              style={{
                background: `linear-gradient(135deg, #234336 0%, #2d5446 100%)`,
                transition: 'all 0.3s ease-in-out'
              }}
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute inset-0"
                initial={{ backgroundPosition: '0% 0%' }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 10%)',
                  backgroundSize: '20px 20px',
                }}
              />

              <motion.div
                className="mb-4 relative z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {card.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-2 relative z-10">{card.title}</h3>

              <div className="relative z-10 flex flex-col items-center">
                <p className="text-gray-100 mb-2">{card.content}</p>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCopy(card.copyValue, index)}
                  className="flex items-center mt-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  <AnimatePresence mode="wait">
                    {copiedItem === index ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex items-center"
                      >
                        <CheckCircleIcon sx={{ fontSize: 20, mr: 1, color: '#4ade80' }} />
                        <span className="text-sm">Copied!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex items-center"
                      >
                        <ContentCopyIcon sx={{ fontSize: 20, mr: 1 }} />
                        <span className="text-sm">Copy</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>

              {/* Animated decorative elements */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  filter: 'blur(1px)',
                  transform: 'translate(50%, -50%)'
                }}
              />

              <motion.div
                className="absolute bottom-0 left-0 w-24 h-24 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.05, 0.15, 0.05]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  filter: 'blur(1px)',
                  transform: 'translate(-50%, 50%)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <div
            className="rounded-lg w-full max-w-2xl p-8"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)',
              boxShadow: '0 4px 6px -1px rgba(35, 67, 54, 0.1), 0 2px 4px -1px rgba(35, 67, 54, 0.06)'
            }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-montserrat text-2xl mb-8 text-center text-gray-800"
            >
              Send Us a Message
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'name', label: 'Name', required: true },
                  { name: 'phone', label: 'Phone', required: true },
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  { name: 'company', label: 'Company' }
                ].map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                  >
                    <TextField
                      {...field}
                      value={formData[field.name]}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      sx={{
                        transform: focusedField === field.name ? 'scale(1.02)' : 'scale(1)',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <TextField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  sx={{
                    transform: focusedField === 'subject' ? 'scale(1.02)' : 'scale(1)',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <TextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  multiline
                  rows={4}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  sx={{
                    transform: focusedField === 'message' ? 'scale(1.02)' : 'scale(1)',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={status === 'sending' ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  disabled={status === 'sending'}
                  fullWidth
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #234336 0%, #2d5446 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #2d5446 0%, #234336 100%)',
                    },
                    padding: '12px',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-lg p-4 mt-4 ${status === 'success'
                      ? 'bg-green-50 text-green-800'
                      : status === 'sending'
                        ? 'bg-blue-50 text-blue-800'
                        : 'bg-red-50 text-red-800'
                    }`}
                >
                  {status === 'success'
                    ? 'Message sent successfully!'
                    : status === 'sending'
                      ? 'Sending message...'
                      : 'Failed to send message. Please try again.'}
                </motion.div>
              )}

            </form>
          </div>
        </motion.div>
      </motion.div>
    </ThemeProvider>
  );
};

export default Contact;