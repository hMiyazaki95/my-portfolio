import React from 'react'
// https://www.npmjs.com/package/react-multi-carousel
// common usage
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const TestimonialSlider = () => {
  return (
    <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="item"
    >
        <ClientReview 
        image="/images/hajime-avatar-1024.png" 
        name="Hajime Miyazaki" 
        role="Software Developer"
        />
        <ClientReview 
        image="/images/hajime-avatar-1024.png" 
        name="Hajime Miyazaki" 
        role="Software Developer"
        />
        <ClientReview 
        image="/images/hajime-avatar-1024.png" 
        name="Hajime Miyazaki" 
        role="Software Developer"
        />
        <ClientReview 
        image="/images/hajime-avatar-1024.png" 
        name="Hajime Miyazaki" 
        role="Software Developer"
        />
        <ClientReview 
        image="/images/hajime-avatar-1024.png" 
        name="Hajime Miyazaki" 
        role="Software Developer"
        />
        <ClientReview 
        image="/images/hajime-avatar-1024.png" 
        name="Hajime Miyazaki" 
        role="Software Developer"
        />
        


        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
    </Carousel>

  );
};

export default TestimonialSlider
