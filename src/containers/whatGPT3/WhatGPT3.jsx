import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The Possibilities are Beyond your Imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non"
        />
        <Feature
          title="Knowledgebase"
          text="amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non"
        />
        <Feature
          title="Education"
          text="amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
