import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Typography,
    Button,
    Box,
    Container,
    Chip,
    IconButton,
    Dialog,
    DialogContent,
    DialogTitle,
    useMediaQuery,
    useTheme,
    Divider,
} from '@mui/material';
import {
    ArrowForward,
    Settings,
    LocalShipping,
    CheckCircle,
    ZoomIn,
    Close,
    Info,
    Star,
    TrendingUp
} from '@mui/icons-material';
import { images } from '../assets/assets';
import Title from './Title';

const ProductShowcase = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedImage, setSelectedImage] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleImageClick = (product) => {
        setScrollPosition(window.scrollY);
        setSelectedImage(product);
        document.body.style.overflow = 'hidden';
    };

    // Restore scroll position when closing dialog
    const handleCloseDialog = () => {
        document.body.style.overflow = 'unset';
        setSelectedImage(null);
        // Use setTimeout to ensure the dialog is fully closed before scrolling
        setTimeout(() => {
            window.scrollTo({
                top: scrollPosition,
                behavior: 'auto'
            });
        }, 0);
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    const slideUpVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const products = [
        {
          size: '6mm',
          title: '6mm Bio Pellets',
          description: 'Ideal for small-scale residential heating systems and compact boilers, offering easy ignition and consistent feeding.',
          image: images[0],
          application: [
            'Residential Heating Systems',
            'Compact Boilers',
            'Small-Scale Industrial Boilers',
          ],
          machine: 'Vertical Ring Die Pellet Machine',
          highlights: ['Easy Ignition', 'Consistent Feeding', 'Suitable for Small-Scale Applications'],
        },
        {
          size: '8mm',
          title: '8mm Bio Pellets',
          description: 'Suitable for medium-sized residential and small commercial applications, balancing energy density and feeding consistency.',
          image: images[1],
          application: [
            'Medium-Sized Residential Heating',
            'Small Commercial Boilers',
            'Industrial Boilers',
          ],
          machine: 'Vertical Ring Die Pellet Machine',
          highlights: ['Balanced Energy Density', 'Feeding Consistency', 'Versatile Applications'],
        },
        {
          size: '12mm',
          title: '12mm Bio Pellets',
          description: 'Designed for large commercial heating systems and industrial applications, providing high energy output and durability.',
          image: images[2],
          application: [
            'Large Commercial Heating Systems',
            'Industrial Boilers',
            'Combined Heat and Power (CHP) Systems',
          ],
          machine: 'Vertical Ring Die Pellet Machine',
          highlights: ['High Energy Output', 'Durable', 'Suitable for Industrial Applications'],
        },
        {
          size: '16mm',
          title: '16mm Bio Pellets',
          description: 'Optimal for industrial-scale operations and power generation facilities, offering maximum power and heavy-duty performance.',
          image: images[3],
          application: [
            'Industrial-Scale Boilers',
            'Power Generation Facilities',
            'Large-Scale Industrial Heating',
          ],
          machine: 'Press Die Pellet Machine',
          highlights: ['Maximum Power', 'Heavy Duty', 'Industrial Scale Applications'],
        },
      ];
      

    const ProductSpecDialog = ({ product, open, onClose }) => (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            TransitionComponent={motion.div}
            PaperProps={{
                component: motion.div,
                initial: { y: -50, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { duration: 0.3 }
            }}
        >
            <DialogTitle sx={{
                background: 'linear-gradient(45deg, #1b5e20, #2e7d32)',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography variant="h6">{product?.title} Specifications</Typography>
                <IconButton onClick={onClose} sx={{ color: 'white' }}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ mt: 2 }}>
                <Box sx={{ p: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Add detailed specifications here */}
                        <Typography variant="subtitle1" gutterBottom>
                            Technical Specifications
                        </Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 2, mt: 2 }}>
                            {Object.entries(product?.specs || {}).map(([key, value]) => (
                                <Box
                                    key={key}
                                    sx={{
                                        p: 2,
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        borderRadius: 1,
                                        background: 'rgba(76, 175, 80, 0.05)'
                                    }}
                                >
                                    <Typography variant="caption" color="textSecondary" sx={{ textTransform: 'uppercase' }}>
                                        {key}
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 'medium', color: '#1b5e20' }}>
                                        {value}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </motion.div>
                </Box>
            </DialogContent>
        </Dialog>
    );

    const handleEnquiry = (size) => {
        navigate('/contact', { state: { subject: `Enquiry for ${size} Pellets` } });
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
                py: 8,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background decorative elements */}
            <Box
                component={motion.div}
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, #4caf50 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: 0
                }}
            />

<Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          title="Our Products"
          bodyText="Premium Bio Pellets for Every Scale of Operation"
        />
      </motion.div>

      <Box
        sx={{
          display: 'grid',
          gap: '2rem',
          width: '100%',
          // Mobile
          gridTemplateColumns: '1fr',
          
          // Tablet
          '@media (min-width: 600px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          
          // Large screens
          '@media (min-width: 960px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
            '& > div:last-child': {
              gridColumn: '2',
              justifySelf: 'center',
              width: '100%'
            }
          },
          
          // XL screens
          '@media (min-width: 1200px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto',
            '& > div:last-child': {
              gridColumn: '2',
              justifySelf: 'center',
              width: '100%'
            }
          }
        }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            transition={{ duration: 0.3 }}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow:
                  hoveredCard === index
                    ? '0 20px 40px rgba(0,0,0,0.12), 0 8px 16px rgba(46,125,50,0.1)'
                    : '0 8px 32px rgba(31, 38, 135, 0.1)',
                transition: 'all 0.4s ease',
                position: 'relative',
              }}
            >
                                <CardHeader
                                    title={
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Typography variant="h5" sx={{
                                                color: '#1b5e20',
                                                fontWeight: 'bold',
                                                background: 'linear-gradient(45deg, #1b5e20, #2e7d32)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent'
                                            }}>
                                                {product.title}
                                            </Typography>
                                            <IconButton
                                                size="small"
                                                onClick={() => setSelectedImage(product)}
                                                sx={{
                                                    color: '#1b5e20',
                                                    '&:hover': {
                                                        background: 'rgba(76, 175, 80, 0.1)',
                                                        transform: 'rotate(180deg)',
                                                        transition: 'all 0.3s ease'
                                                    }
                                                }}
                                            >
                                                <Info />
                                            </IconButton>
                                        </Box>
                                    }
                                />

                                <Box
                                    sx={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        height: '250px',
                                    }}
                                >
                                    <motion.img
                                        src={product.image}
                                        alt={product.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: hoveredCard === index
                                                ? 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.3))'
                                                : 'none',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            opacity: hoveredCard === index ? 1 : 0
                                        }}
                                    >
                                        <IconButton
                                            sx={{
                                                color: 'white',
                                                background: 'rgba(46,125,50,0.8)',
                                                '&:hover': { background: 'rgba(46,125,50,0.9)' }
                                            }}
                                            onClick={() => setSelectedImage(product)}
                                        >
                                            <ZoomIn />
                                        </IconButton>
                                    </Box>
                                </Box>

                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 2,
                                            color: '#1b5e20',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {product.description}
                                    </Typography>

                                    <motion.div variants={slideUpVariants}>
                                        <Box sx={{ mb: 3 }}>
                                            {product.highlights.map((highlight, idx) => (
                                                <Chip
                                                    key={idx}
                                                    label={highlight}
                                                    icon={<Star sx={{ color: 'white !important' }} />}
                                                    sx={{
                                                        m: 0.5,
                                                        background: 'linear-gradient(45deg, #2e7d32, #43a047)',
                                                        color: 'white',
                                                        '&:hover': {
                                                            background: 'linear-gradient(45deg, #1b5e20, #2e7d32)',
                                                            transform: 'translateY(-2px)'
                                                        },
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </motion.div>

                                    <Divider sx={{ my: 2 }} />

                                    <Box sx={{ mb: 2 }}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color: '#1b5e20',
                                                display: 'flex',
                                                alignItems: 'center',
                                                mb: 1,
                                                '& svg': { opacity: 0.8 }
                                            }}
                                        >
                                            <Settings sx={{ mr: 1 }} /> Machine Type: {product.machine}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color: '#1b5e20',
                                                display: 'flex',
                                                alignItems: 'center',
                                                '& svg': { opacity: 0.8 }
                                            }}
                                        >
                                            <LocalShipping sx={{ mr: 1 }} /> Minimum Order: 10 Ton
                                        </Typography>
                                    </Box>

                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            color: '#1b5e20',
                                            fontWeight: 'bold',
                                            mb: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1
                                        }}
                                    >
                                        <TrendingUp sx={{ fontSize: 20 }} /> Applications:
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {product.application.map((app, idx) => (
                                            <Chip
                                                key={idx}
                                                label={app}
                                                size="small"
                                                sx={{
                                                    background: 'rgba(76, 175, 80, 0.1)',
                                                    color: '#1b5e20',
                                                    '&:hover': {
                                                        background: 'rgba(76, 175, 80, 0.2)',
                                                    },
                                                    transition: 'all 0.3s ease'
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </CardContent>

                                <CardActions sx={{ p: 3 }}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        endIcon={<ArrowForward />}
                                        onClick={() => handleEnquiry(product.size)}
                                        sx={{
                                            background: 'linear-gradient(45deg, #2e7d32, #43a047)',
                                            color: 'white',
                                            py: 1.5,
                                            fontSize: '1.1rem',
                                            boxShadow: '0 4px 15px rgba(46, 125, 50, 0.2)',
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #1b5e20, #2e7d32)',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 6px 20px rgba(46, 125, 50, 0.4)',
                                            },
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        }}
                                    >
                                        Make Enquiry
                                    </Button>
                                </CardActions>
                            </Card>
                        </motion.div>
                    ))}
                </Box>

                {/* Image Preview Dialog */}
                <Dialog
  open={!!selectedImage}
  onClose={handleCloseDialog}
  maxWidth="md"
  fullWidth
  TransitionComponent={motion.div}
  PaperProps={{
    component: motion.div,
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { duration: 0.3 }
  }}
  sx={{
    '& .MuiDialog-container': {
      alignItems: 'center'
    }
  }}
>
  <DialogContent sx={{ p: 0, position: 'relative', bgcolor: 'black' }}>
    <IconButton
      onClick={handleCloseDialog}
      sx={{
        position: 'absolute',
        right: 8,
        top: 8,
        color: 'white',
        background: 'rgba(0,0,0,0.4)',
        '&:hover': {
          background: 'rgba(0,0,0,0.6)',
        },
        zIndex: 1
      }}
    >
      <Close />
    </IconButton>
    <motion.img
      src={selectedImage?.image}
      alt={selectedImage?.title}
      style={{
        width: '100%',
        height: 'auto',
        maxHeight: '80vh',
        objectFit: 'contain',
        display: 'block'
      }}
      layoutId={`image-${selectedImage?.size}`}
    />
    <Box sx={{ 
      position: 'absolute', 
      bottom: 0, 
      left: 0, 
      right: 0, 
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      p: 2
    }}>
      <Typography variant="h6" color="white">
        {selectedImage?.title}
      </Typography>
      <Typography variant="body2" color="rgba(255,255,255,0.8)">
        {selectedImage?.description}
      </Typography>
    </Box>
  </DialogContent>
</Dialog>

                {/* Floating Action Button for Mobile */}
                <Box
                    component={motion.div}
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1, type: "spring" }}
                    sx={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        display: { xs: 'block', md: 'none' },
                        zIndex: 10
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: '25px',
                            background: 'linear-gradient(45deg, #2e7d32, #43a047)',
                            boxShadow: '0 4px 20px rgba(46, 125, 50, 0.4)',
                            px: 3,
                            py: 1.5,
                            '&:hover': {
                                background: 'linear-gradient(45deg, #1b5e20, #2e7d32)',
                                transform: 'scale(1.05)',
                            }
                        }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Back to Top
                    </Button>
                </Box>
            </Container>

            {/* Background Decoration Bottom */}
            <Box
                component={motion.div}
                animate={{
                    opacity: [0.1, 0.15, 0.1],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                sx={{
                    position: 'absolute',
                    bottom: '5%',
                    left: '5%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, #81c784 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    zIndex: 0
                }}
            />
        </Box>
    );
};

export default ProductShowcase;