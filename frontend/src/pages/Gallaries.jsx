import React, { useEffect, useState } from 'react';
import { 
  Modal, 
  Box, 
  IconButton, 
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  Fade,
  Backdrop
} from '@mui/material';
import { 
  Close as CloseIcon,
  NavigateNext as NavigateNextIcon,
  NavigateBefore as NavigateBeforeIcon
} from '@mui/icons-material';
import Title from '../components/Title'
import { images } from '../assets/assets';


const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setOpen(false);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#F4F7F6' }}>
      <Title title="Biomass Pellets Gallery" />
      
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {images.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <CardActionArea onClick={() => handleOpen(item, index)}>
                  <CardMedia
                    component="img"
                    height="260"
                    image={item}
                    alt="Biomass Pellet"
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.4)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ color: 'white' }}>
                      View Image
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              bgcolor: 'black',
              borderRadius: 2,
              boxShadow: 24,
              p: 1,
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
                zIndex: 1,
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            <IconButton
              onClick={handlePrevious}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <NavigateNextIcon />
            </IconButton>

            <Box
              component="img"
              src={selectedImage}
              alt="Biomass Pellet"
              sx={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                display: 'block',
                margin: 'auto',
                borderRadius: 1,
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Gallery;