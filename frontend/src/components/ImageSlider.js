import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useSwipeable } from 'react-swipeable';

const images = [
  'https://picsum.photos/1600/900',
  'https://picsum.photos/1616/909',
  'https://picsum.photos/1632/918',
];

function ImageSlider({ size }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonRadius, setButtonRadius] = useState({});
  const [offset, setOffset] = useState(0);
  const [iconSize, setIconSize] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enable swipe on mouse events as well
  });

  const buttonSize = (size) => {
    if (size === 'large') return {xs: '4rem', md: '5rem'};
    else if (size === 'medium') return {xs: '3rem', md: '4rem'};
    else return {xs: '2rem', md: '3rem'};
  }

  const offsetvalue = (size) => {
    if (size === 'large') return -40;
    else if (size === 'medium') return {xs: -24, md: -36};
    else return {xs: -16, md: -24};
  }

  return (
    <Box
      sx={{
        maxWidth: '1296px',
        overflow: 'visible',
        position: 'relative'
      }}
    >
      <Box
        {...handlers}
        sx={{
          maxWidth: '1296px',
          height: 0,
          paddingTop: '56.25%', // Aspect ratio 16:9
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 2,
          margin: 'auto',
          overflow: 'hidden',
          touchAction: 'none', // Prevent scroll interference
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'transform 0.5s ease-in-out', // Smooth transition
            transform: `translateX(-${currentIndex * 100}%)`, // Move based on current index
            display: 'flex', // Use flexbox to keep images inline
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image}
              alt={`slide-${index}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                flexShrink: 0, // Prevent the image from shrinking
              }}
            />
          ))}
        </Box>
      </Box>
      <IconButton
          onClick={handlePrevious}
          sx={{
            position: 'absolute',
            left: offsetvalue,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            borderRadius: '50%',
            border: '1px solid #bcc1c9',
            width: buttonSize(size),
            height: buttonSize(size),
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: '2.5rem', color: 'black' }} />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: offsetvalue,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            borderRadius: '50%',
            border: '1px solid #bcc1c9',
            width: buttonSize(size),
            height: buttonSize(size)
          }}
        >
          <NavigateNextIcon sx={{ fontSize: '2.5rem', color: 'black' }} />
        </IconButton>
    </Box>
  );
}

export default ImageSlider;
