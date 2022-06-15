import React from "react";
import CoverImage from '../images/cover3.jpg';

export default function CarouselComponent() {
  return (
    <>
     
          <img
            className="d-content w-100 "
            src={CoverImage}
            alt="First slide"

          />
       
    
    </>
  );
}
