import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/slider-img/pic1.jpg';
import image2 from '../assets/slider-img/pic2.jpg';

export default function Slider() {
  const images = [
    { id: 1, src: image1, alt: 'Image 1' },
    { id: 2, src: image2, alt: 'Image 2' },
  ];

  return (
    <Carousel>
      {images.map((image) => (
        <div className='slider' key={image.id}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
}

