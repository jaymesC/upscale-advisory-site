import React, { useEffect } from "react";
import "../About.css";
import AbtImg1 from "../images/about1.JPG";
import AbtImg2 from "../images/about2.JPG";



export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <h1 id="about">
        AB<span className="underline">OU</span>T
      </h1>
      <div className="row About__section">
        <div className="col-md-6">
          <img src={AbtImg1} alt="" className="image1" />
        </div>
        <div className="col-md-6 abt__writeup">
          <p>
            {" "}
            Owners of small scale businesses also deserve high quality
            consultancy and Advisory services. Most of the successes of the
            largest multinational firms can be attributed to their ability to
            employ the services of the big four: Deloitte, PWC, KPMG and Ernst
            and young. They can do this because they control large dollar bags.{" "}
            <br />
            We want owners of small scale enterprises to be able to enjoy such
            high quality advisory services therefore we created “Upscale
            Advisory”.
          </p>
        </div>
      </div>
      <div className="row About__section2">
        <div className="col-md-6">
          With several years of business experience, we want to help you
          increase not just your top line revenue but also your profitability
          KPIs. We will help you improve your finances, acquire more paying
          customers and introduce you to proven methods that improve work like
          balance. <br /> <br />
          We are an impact investment company the strives to positively
          influence the society by investing in the right companies.
        </div>
        <div className="col-md-6">
          <img src={AbtImg2} alt="" className="image2" />
        </div>
      </div>
    </div>
  );
};
