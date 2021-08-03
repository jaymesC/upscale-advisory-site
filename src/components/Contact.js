import React, { useEffect } from 'react'
import '../Contact.css'

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container container1">
        <h1>Contact Us</h1>
        <h5>
          Need to get more clients? You are more than welcomed to leave your
          contact info and we will get in touch with you shortly.{" "}
        </h5>
        <form>
          {/* Name input  */}
          <div className="form-outline mb-4">
            <input
              type="text"
              id=""
              className="form-control"
              placeholder="Name:"
            />
          </div>

          {/* Email input  */}
          <div className="form-outline mb-4">
            <input
              type="email"
              id=""
              className="form-control"
              placeholder="Email:"
            />
          </div>

          {/* Message input */}
          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id=""
              rows="4"
              placeholder="Message:"
            ></textarea>
          </div>

          {/* Submit button  */}
          <button type="submit" className="btn bg-dark mb-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
