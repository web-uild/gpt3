import React from "react";
import "./possibility.css";

import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibilities" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className="gradient__text">
          The Possibilities are Beyond your Imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          adipisci aut officiis possimus, omnis et corrupti vel animi accusamus
          sed sit aliquam voluptates eos ad molestiae sapiente veniam quia!
          Maxime ducimus quaerat nisi perferendis provident.
        </p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
