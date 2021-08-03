import React, { useEffect } from "react";
import "../Blog.css";
import blog2a from "../images/blog2a.JPG";
import blog2b from "../images/blog2b.JPG";
import blog2c from "../images/blog2c.JPG";


export const Blog2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container blog__container">
      <h1>HOW TO INCREASE YOUR AUTHORITY IN THE INTERNET SPACE</h1>
      <h4>By Upscale Advisory on 21 April 2020</h4>
      <div className="row blog1">
        <div className="col-md-8 pad">
          <p>
            Have you tried to create a website and succeeded in attracting
            people to your page just to see them go away without buying from
            you? Tried all the social media sponsored ads. to draw attention and
            create leads but you could not close sales? It feels like people
            don’t care about your message and the value you bring to them.
            Therefore, you think selling through the internet is impossible.{" "}
            <br />I will reveal to you why this happens and show you in simple
            steps how to solve this problem and close more sales. <br />
            Remember the internet space is very large; the whole world of
            billions of people converges there and for this reason it is hard
            for people to know who to trust. Studies have shown that people buy
            from who they trust. And people trust you when you are an authority
            in your field. If you become an authority, people will listen to
            you, subscribe to your content, consume your content, build trust
            for you and then buy from you. <br />
            Please find below a few simple ways to become an authority in the
            market:
          </p>
        </div>
        <div className="col-md-4">
          <img src={blog2a} alt="" className="imageBlog1" />
        </div>
      </div>

      <div className="row part1 mt-md-5">
        <h2>1.BE GOOD IN YOUR NICHE</h2>
        <p>
          First, you must have a specific niche that you are passionate about
          and know everything possible about it. However, your knowledge does
          not guarantee success until you are able to have people see and learn
          from your knowledge. Therefore, you can choose to write a free book
          about your niche or blog posts. Making some free valuable content will
          attract people. Let it be simple and concise.
        </p>
      </div>

      <div className="row blog1">
        <h2>2. CATCHY LANDING WEBSITE PAGE</h2>
        <div className="col-md-8 pad">
          <p>
            Many people underestimate the power of pictures. A wise man once
            said “a picture is worth a thousand words”. It is a fact. Pictures
            can define the way people perceive you. The idea here is to use your
            pictures in your site to boost your authority. You can use a picture
            of where you are speaking to the audience or something from your
            ‘natural habitat’. Depending on your niche, have a picture doing
            something from your everyday life. Are you a dancer? Have a picture
            of you dancing on a stage.
          </p>
        </div>
        <div className="col-md-4">
          <img src={blog2b} alt="" className="imageBlog1" />
        </div>
      </div>

      <div className="row blog1 part1">
        <h2>3.CREATE WHERE YOUR AUDIENCE IS</h2>
        <p>
          This is important in getting authority in the market. You need to know
          where exactly your potential customers are and pitch your tent there.
          If your niche is more of social activities like dancing, then
          Instagram and Facebook can be a perfect place for you. But if it is
          more professional and target companies then LinkedIn marketing will be
          more likely for you.
        </p>
      </div>
      <div className="row blog1">
        <h2>4. GET SOME TESTIMONIALS</h2>
        <div className="col-md-8 pad">
          <p>
            If you render a good service to clients there are always chances
            that they will talk about you. So, have them do some video
            testimonials with you or even snap pictures with them and request
            them to post on their social media handle. Having other people talk
            about you and your services is a proven way to get authority in the
            industry. Don’t be passive about it. Actively ask your happy clients
            to give you testimonials. Of course you should offer them something,
            maybe a discount in exchange for the free marketing they give you.
          </p>
        </div>
        <div className="col-md-4">
          <img src={blog2c} alt="" className="imageBlog1" />
        </div>
      </div>
      <div className="row blog1 part1">
        <h2>5.GET ASSOCIATED WITH OTHER AUTHORITIES</h2>
        <p>
          The human mind unconsciously judges people based on who he or she
          surrounds himself or herself with. So, if you have interactions with
          other experts in your field, you’ll be associated with them, thus
          people will perceive you as an authority too. Now, hanging out with
          some authorities in your niche may be quite hard or maybe you are shy
          about talking. You can request or hire some social media influencers
          associated with your niche to talk about you and your services. All
          these processes and procedures, we at Upscale Advisory have mastered
          and offer to our clients to scale up their business by strengthening
          their authority on the internet. You are one step away to your
          success. Schedule a call with us or write us an Email to get your
          business on track to sustainable financial growth.
        </p>
      </div>
    </div>
  );
};
