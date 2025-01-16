import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  IconButton,
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
      <Card 
        sx={{
          height: '18rem', // 64 in rem units
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease-in-out',
          overflow: 'hidden', // Ensure content doesn't overflow
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: (theme) => theme.shadows[10],
          },
        }}
      >
        <Box 
          sx={{ 
            position: 'relative',
            height: '18rem', // Leave room for content below
            overflow: 'hidden' // Hide image overflow
          }}
        >
          <CardMedia
            component="img"
            image={image || "/api/placeholder/400/320"}
            alt={name}
            sx={{
              cursor: 'pointer',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
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
        <CardContent sx={{ flexShrink: 0, py: 1.5 }}>
          <Typography 
            variant="h6" 
            component="h3"
            sx={{ 
              fontWeight: 600,
              color: 'primary.main',
              mb: 0.5,
              lineHeight: 1.2
            }}
          >
            {name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box 
              sx={{ 
                width: 32, 
                height: 2, 
                backgroundColor: 'text.primary',
                mr: 1
              }} 
            />
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              {role}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Full Screen Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            borderRadius: 2,
            overflow: 'hidden',
            maxHeight: '95vh',
            m: { xs: 1, sm: 2 },
          }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
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

          <Box
            sx={{
              width: '100%',
              height: '90vh',
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