import React, { useEffect } from 'react'
import '../Home.css'
import { NavLink } from "react-router-dom";
import homeImage from '../images/homepic.jpg'
import AbtImg1 from '../images/about1.JPG'
import AbtImg2 from '../images/about2.JPG'
import successPic from '../images/successpic.JPG'
import toolset from '../images/toolset.JPG'
import exPic1 from '../images/expic1.JPG'
import exPic2 from '../images/expic2.JPG'
import service1 from '../images/service1.JPG'
import service2 from '../images/service2.JPG'
import service3 from '../images/service3.JPG'
import blog1 from '../images/blog1.JPG'
import blog2 from '../images/blog2.JPG'
import blog3 from '../images/blog3.JPG'
import {Word} from '../components/Word'
import ServiceSection from './ServiceSection'
import Aos from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  
  useEffect(() => {
     window.scrollTo(0, 0)
     Aos.init({ duration: 2000 });
   }, []);
  return (
    <div className="home">
      <div className="home__section">
        <div>
          <img src={homeImage} alt="" className="image" />
        </div>
        <Word />
      </div>
      <div className="container ">
        <h1 id="about">
          AB<span className="underline">OU</span>T
        </h1>
        <div className="row About__section" data-aos="fade-up">
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
              and young. They can do this because they control large dollar
              bags. <br />
              We want owners of small scale enterprises to be able to enjoy such
              high quality advisory services therefore we created “Upscale
              Advisory”.
            </p>
          </div>
        </div>
        <div className="row About__section2" data-aos="fade-up">
          <div className="col-md-6">
            With several years of business experience, we want to help you
            increase not just your top line revenue but also your profitability
            KPIs. We will help you improve your finances, acquire more paying
            customers and introduce you to proven methods that improve work like
            balance. <br /> <br />
            We are an impact investment company that strives to positively
            influence the society by investing in the right companies.
          </div>
          <div className="col-md-6">
            <img src={AbtImg2} alt="" className="image2" />
          </div>
        </div>
        <h1>
          Why are our cl<span className="underline">ien</span>ts successful?
        </h1>
        <div className="row success" data-aos="fade-up">
          <div className="col-md-10 ">
            <img src={successPic} alt="" className="successPic" />
          </div>
        </div>
        <div className="row strategy" data-aos="fade-up">
          <div className="col-md-12">
            <h2>Tailor made strategy</h2>
            We know the importance of personal care in business and
            prioritise it. We provide one on one coaching and mentorship,
            strategize with you via all available platforms, Whatsapp, Facebook
            chats, Skype, and our experts are available to our customers round
            the clock.
          </div>
        </div>
        <div className="row success" data-aos="fade-up">
          <div className="col-md-10 ">
            <img src={toolset} alt="" className="successPic" />
          </div>
        </div>
        <div className="row strategy" data-aos="fade-up">
          <div className="col-md-12">
            <h2>Right tool set</h2>
            We have specialised tools that has proven to work even in the most
            adverse cases. We have authority in digital strategies that guaranty
            long term success. The intriguing part of it is that it is totally
            automated. With this you have a lot of free time to invest in other
            things.
          </div>
        </div>
        <h1>
          What can o<span className="underline">ur c</span>lients expect?
        </h1>
        <div className="row client__section" data-aos="fade-up">
          <div className="col-md-6 ">
            <img src={exPic2} alt="" className="clientPics" />
          </div>
          <div className="col-md-6 adjust">
            <img src={exPic1} alt="" className="clientPics" />
          </div>
        </div>
        <div className="row client__section strategy" data-aos="fade-up">
          <div className="col-md-6 strategy">
            <h2>Build your company</h2>
            Do you want to make more sales and increase capacity utilisation in
            your company? We will help design a workable strategy to achieve
            this. We show you step by step how it works and help you optimise
            the long-term growth of your company. We want to see you at the top.
          </div>
          <div className="col-md-6 strategy1">
            <h2>Scale up your company</h2>
            Do you already have a successful company? We have the right craft
            and strategies to make you a champion in your industry. We automate
            and systematise your existing processes so as to achieve the maximum
            potential of your business. Create free time and scale up your
            company with us.
          </div>
        </div>
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
        <div className="blog">
          <h1>Blog</h1>
          <p>
            Here are some articles to give you insight on how to grow your
            business
          </p>
          <div className="row blog__section" data-aos="fade-up">
            <NavLink exact to="/blog">
              <div className="col-md-4 blogPic">
                {<img src={blog1} alt="" />}
              </div>
            </NavLink>
            <NavLink exact to="/blog2">
              <div className="col-md-4 blogPic">
                {<img src={blog2} alt="" />}
              </div>
            </NavLink>
            <NavLink exact to="/blog3">
              <div className="col-md-4 blogPic">
                {<img src={blog3} alt="" />}
              </div>
            </NavLink>
          </div>
        </div>
        <div className="internship">
          <h3>Internship application form ▷</h3>
          <span className="internship__writeUp">
            <p>
              Do you need capital to grow your business? Fill the form below and
              if your business meets our criteria, one of our managers will
              contact you.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
