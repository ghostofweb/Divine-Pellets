import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Fade,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const TeamCard = ({ name, role, image }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Team Card */}
      <Fade in timeout={600}>
        <Card 
          sx={{
            maxWidth: '100%',
            mb: 4,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: (theme) => theme.shadows[10],
            },
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              height="300"
              image={image || "/api/placeholder/400/320"}
              alt={name}
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
              onClick={handleOpen}
            />
            <IconButton
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
              onClick={handleOpen}
            >
              <ZoomInIcon />
            </IconButton>
          </Box>
          <CardContent>
            <Typography 
              variant="h5" 
              component="h3"
              sx={{ 
                fontWeight: 600,
                color: 'primary.main',
                mb: 1
              }}
            >
              {name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Box 
                sx={{ 
                  width: 32, 
                  height: 2, 
                  backgroundColor: 'text.primary',
                  mr: 1
                }} 
              />
              <Typography 
                variant="subtitle1" 
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                {role}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Fade>

      {/* Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            borderRadius: 2,
            overflow: 'hidden',
            maxHeight: '90vh',
          }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              '&:hover': {
                backgroundColor: 'white',
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Image Container */}
          <Box
            sx={{
              width: '100%',
              height: '75vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: 'black',
            }}
          >
            <img
              src={image || "/api/placeholder/400/320"}
              alt={name}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* Info Section */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
              color: 'white',
              p: 3,
            }}
          >
            <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
              {name}
            </Typography>
            <Typography variant="h6">
              {role}
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TeamCard;