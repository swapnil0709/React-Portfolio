import React from "react";

import {
  StyledAbout as StyledFaq,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../components/style";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            illum perferendis maxime vero deserunt quasi?
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            illum perferendis maxime vero deserunt quasi?
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            illum perferendis maxime vero deserunt quasi?
          </p>
        </div>
      </div>
      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            illum perferendis maxime vero deserunt quasi?
          </p>
        </div>
      </div>
    </StyledFaq>
  );
};

export default FaqSection;
