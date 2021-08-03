import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";




const ServiceSection = ({ pic, writeUp }) => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <div className="row service__section" data-aos="fade-up">
      <div className="col-md-6" >
        {pic}
      </div>
      <div className="col-md-6 pad">{writeUp}</div>
    </div>
  );
}

export default ServiceSection;