import React from 'react'
import '../Word.css'
import { Spring } from "react-spring/renderprops";

export const Word = () => {
  return (
    <Spring className="spring"
      from={{ opacity: 0, marginBottom: 0 }}
      to={{ opacity: 1, marginBottom: -170 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {(props) => (
        <div style={props} className="word1">
          <div className="word">
            <p>We help small scale entrepreneurs grow faster by providing:</p>
            <p> top notch advisory services </p>
            <p> remote front and backend developers</p>
            <p> remote marketers and sales agents</p>
            <br /> <br />
            <h5>Let‘s help you upscale faster and seamlessly</h5>
          </div>
        </div>
      )}
    </Spring>
  );
}
