import React, { useEffect } from "react";
import "../Blog.css";
import blog3a from "../images/blog3a.JPG";
import blog3b from "../images/blog3b.JPG";
import blog3c from "../images/blog3c.JPG";


export const Blog3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container blog__container">
      <h1>Business challenges and how to solve them</h1>
      <h4>By Upscale Advisory on 27th April 2020</h4>
      <div className="row blog1">
        <div className="col-md-8 pad">
          <p>
            Have you started a new business lately and you are wondering whether
            you shall overcome all the mountains that lie ahead? Starting a
            business is a challenging undertaking but keeping it afloat and
            operational is even a bigger challenge. <br /> According to a study
            conducted by Harvard business school, a significant percentage of
            small enterprises in the US succumb to business challenges in the
            first three years of operation. The percentage is even higher after
            ten years of operation. In this article we are going to explore the
            main business challenges facing small and medium enterprises and
            suggest ways of overcoming these challenges.
          </p>
        </div>
        <div className="col-md-4">
          <img src={blog3a} alt="" className="imageBlog1" />
        </div>
      </div>

      <div className="row part1 mt-md-5">
        <h2>1. Not enough customers to sustain desired growth.</h2>
        <p>
          Many businesses struggle to achieve desired growth due to low clients.
          Having enough insight about your customers can inform you on how to
          make them close the deal. Who are your customers? How many minutes are
          they likely to spend on your website? Are you offering what they
          really want? Can they feel your presence on social media? <br />{" "}
          Solution: Rethink your marketing strategy. <br /> Use the available
          digital tools such as social media, digital marketing and web analytic
          tools to achieve faster results. You don’t even have to do it
          yourself. With a small budget, you can hire digital experts to do the
          marketing for you.
        </p>
      </div>

      <div className="row blog1 part1">
        <h2>2.Negative rating from former customers</h2>
        <div className="col-md-8 pad">
          <p>
            Social media has given small businesses an opportunity to interact
            and engage with their customers. However, not all customers get the
            right impression of your business. Negative publicity can spread
            very fast and push away potential customers. <br /> Solution: Stay
            calm, engage politely. <br /> One thing is for sure, the negative
            publicity by an irritated buyer will have a long lasting impact and
            the sooner it’s contained, the better. Approach the client with
            humility and understanding, try to understand why he/she is
            dissatisfied, apologize and offer a refund if possible. Bear in mind
            that whatever you say to the dissatisfied client is informing your
            potential customers on how you resolve disputes.
          </p>
        </div>
        <div className="col-md-4">
          <img src={blog3b} alt="" className="imageBlog1" />
        </div>
      </div>

      <div className="row blog1 part1">
        <h2>3. Maintaining a high profile on social media.</h2>
        <p>
          Creating a good social media following, that can be translated to
          sales is not an easy task. With millions of users across the globe and
          new ones signing up every day, social media remains one of the most
          effective tools to reach your prospects. But how? Creating a short
          video about your business will have a higher popularity among social
          media users than a static photo. <br /> Solution: Adopt a smart social
          media strategy <br /> Social media ads can be affected by a lot of
          factors such as text of the ad or post, graphics and videos as well as
          demographics such as location or target group. You can hire a social
          media expert to do all the job for you as you focus on your core
          business processes.
        </p>
      </div>
      <div className="row blog1">
        <h2>
          4. Lack of general and domain-specific business knowledge: finance,
          operations, and marketing
        </h2>
        <div className="col-md-8 pad">
          <p>
            Have you ever found yourself in a situation where you don’t possess
            the technical knowledge necessary to keep your business processes
            running? Be it making tax returns or digitization of your key
            business processes. <br /> Solution: Outsource <br /> The best
            solution is to have someone in the team who has the very expertise
            that is needed in your business. Hiring new workers is costly and
            consuming so outsourcing this process might be a better option.{" "}
            <br /> Although business challenges vary from one enterprise to
            another, challenges such as attracting new customers, maintaining a
            high profile in social media, digitization and smooth running of key
            business processes are common challenges to all businesses. Need a
            little help in getting more clients? Maintaining a high social media
            profile? We at upscale advisory are determined to help you
            seamlessly improve your finances, acquire more paying customers, and
            overcome the key challenges in your business. Send us an email or
            give us a call and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="col-md-4">
          <img src={blog3c} alt="" className="imageBlog1" />
        </div>
      </div>
    </div>
  );
};
