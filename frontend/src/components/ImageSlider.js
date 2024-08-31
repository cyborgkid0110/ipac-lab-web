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
  const [offset, setOffset] = useState({});

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

  React.useLayoutEffect(() => {
    if (size === 'large') {
      setButtonRadius({xs: '3rem', sm: '4rem', md: '5rem'});
      setOffset({xs: -24, sm: -32, md: -40});
    }
    else if (size === 'medium') {
      setButtonRadius({xs: '2.5rem', sm: '3rem', md: '4rem'});
      setOffset({xs: -20, sm: -24, md: -32});
    }
    else {
      setButtonRadius({xs: '2rem', sm: '2.5rem', md: '3rem'});
      setOffset({xs: -16, sm: -20, md: -24});
    }
  },[size])

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
            left: offset,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            borderRadius: '50%',
            border: '1px solid #bcc1c9',
            width: buttonRadius,
            height: buttonRadius,
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: '2.5rem', color: 'black' }} />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: offset,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            borderRadius: '50%',
            border: '1px solid #bcc1c9',
            width: buttonRadius,
            height: buttonRadius
          }}
        >
          <NavigateNextIcon sx={{ fontSize: '2.5rem', color: 'black' }} />
        </IconButton>
    </Box>
  );
}

export default ImageSlider;
