import React, {useEffect } from 'react'
import '../Services.css'
import ServiceSection from "./ServiceSection";
import service1 from "../images/service1.JPG";
import service2 from "../images/service2.JPG";
import service3 from "../images/service3.JPG";

export const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container serviceMargin">
      <h1>
        SE<span className="underline">RV</span>ICES
      </h1>

      <ServiceSection
        pic={<img src={service1} alt="" />}
        writeUp="We understand that to efficiently execute your operations you need a proficient marketing and sales team. We have trained sales agents waiting to help you scale up your operations and generate more revenue."
      />

      <ServiceSection
        pic={<img src={service2} alt="" />}
        writeUp="We don’t just provide you with remote staff, we provide top notch
              advisory. We advice and mentor you on how to succeed in your
              endeavour. We trust in your ability to succeed."
      />

      <ServiceSection
        pic={<img src={service3} alt="" />}
        writeUp="Our inhouse front and back end engineers are ready to jump on your
          project and execute flawlessly. Our competent developers skilled in
          Java, Python, Git, Linux etc are on standby ready solve your business
          challenges."
      />
    </div>
  );
}
