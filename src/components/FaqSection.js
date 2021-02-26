import React from "react";
import styled from "styled-components";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../components/style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
//Animate Shared Layout detects if elements layout changed
const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?" className="question">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              illum perferendis maxime vero deserunt quasi?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule" className="question">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              illum perferendis maxime vero deserunt quasi?
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods" className="question">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              illum perferendis maxime vero deserunt quasi?
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?" className="question">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              illum perferendis maxime vero deserunt quasi?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
