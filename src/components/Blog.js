import React, {useEffect} from 'react'
import '../Blog.css'
import blogSec1 from "../images/blogsecpic1.JPG";
import blogSec2 from "../images/blogsecpic2.JPG";
import blogSec3 from "../images/blogsecpic3.JPG";

export const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container blog__container">
      <h1>4 ways to get clients online</h1>
      <h4>By Upscale Advisory on 21 April 2020</h4>
      <div className="row blog1">
        <div className="col-md-8 pad">
          <p>
            How do I get more clients? This is a question that every
            entrepreneur has asked himself or herself at one point in time. In
            this internet age, it has never been easier to find clients.
            However, this ease of finding clients comes with its difficulties.
            One needs strategy, strong will and consistency to achieve this but
            it is very doable. Going by research, personal experience and the
            experience of my colleagues and fellow business men, below are 4-
            effective methods to get clients online:
          </p>
        </div>
        <div className="col-md-4">
          <img src={blogSec1} alt="" className="imageBlog1" />
        </div>
      </div>

      <div className="row part1 mt-md-5">
        <h2>
          1.Your current clients are one of your greatest assets when it comes
          to finding new clients.
        </h2>
        <p>
          They have an already established connection to their peers and their
          peers already trusts and believe them. All you need is a shout out or
          recommendation from your current clients. You could systematically ask
          them for referrals and they will happily do it if they are happy with
          the services you offer to them. You could also give them a discount
          for this help. I would ask for recommendations with two questions:{" "}
          <br /> <br />
          1. Hey Kim, do you know anyone in your network that would need my
          services. <br />
          2. Would you please recommend me to them? I would give you a 10%
          discount on your next payment if I do business with them based on your
          referral.
        </p>
      </div>

      <div className="row blog1">
        <h2>
          2. Your presence on social media: Facebook, instagram and linkedin is
          crucial.
        </h2>
        <div className="col-md-8 pad">
          <p>
            Some of the most successful clients I have worked with have a solid
            presence on social media. If you are currently not active on social
            media, I highly recommend you learn the tips and tricks of the
            social media game. It is also important to have a good strategy. The
            nice thing about social media is that you don’t have to even do it
            by yourself. You can hire an expert to help you handle your social
            media strategy on a shoestring budget. Why tarriest thou? Improve
            your social media game and close more clients from facebook,
            linkedin and instagram by implementing the right strategy.
          </p>
        </div>
        <div className="col-md-4">
          <img src={blogSec2} alt="" className="imageBlog1" />
        </div>
      </div>

      <div className="row blog1 part1">
        <h2>3. Ads Ads Ads, Facebook google and Instagram ads</h2>
        <p>
          The internet gives us the opportunity to laser focus on any specific
          group of people. Properly define who your target group is and
          implement killer strategies to help you achieve your aim of getting
          more revenue. I would highly recommend that you do not test the waters
          with both feet to avoid stories that touch the heart. You can start a
          campaign with as little as 5 dollars per day, analyze the results
          obtained and then optimize your ads. Remember, you can hire an expert
          to this on a shoestring budget. Save your time and focus on your area
          of expertise.
        </p>
      </div>
      <div className="row blog1">
        <h2>
          4. Focus your business on a precisely specific audience, niche it down
          and use SEO to target them
        </h2>
        <div className="col-md-8 pad">
          <p>
            We all know the saying ‘Jack of all trades, master of none’ this
            truly applies to marketing. A Lion cannot chase two preys at the
            same time. Create the ideal picture of a specific audience, niche it
            down and be as precise as possible. Write blog posts that you
            believe will interest your target group, give them free knowledge,
            by this you are proving to them that you are an expert in your field
            and soon they will come to you when they have problems. And you will
            make them your clients. It is wise to always collect email address
            and build a mailing list. Think about email marketing too.
          </p>
        </div>
        <div className="col-md-4">
          <img src={blogSec3} alt="" className="imageBlog1" />
        </div>
      </div>
    </div>
  );
}
