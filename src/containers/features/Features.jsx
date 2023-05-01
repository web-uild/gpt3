import React from "react";
import "./features.css";
import { Feature } from "../../components";

const FeaturesData = [
  {
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis, aliquam similique nulla quo quam!",
  },

  {
    title: "Ipsum ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis, aliquam similique nulla quo quam!",
  },

  {
    title: "Dolor ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis, aliquam similique nulla quo quam!",
  },

  {
    title: "Sit ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis, aliquam similique nulla quo quam!",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize it. Step into the
          Future today and Make it Happen
        </h1>
        <p>Request early access</p>
      </div>
      <div className="gpt3__features-container">
        {FeaturesData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
