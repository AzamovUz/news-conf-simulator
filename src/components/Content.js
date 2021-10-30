import React, { useState } from "react";
import { Typography } from "antd";
// import "App.css";

const { Title } = Typography;


const Content = ({items}) => {
  const [activeCase, setActiveCase] = useState(items[0].question);
  

  
  return (
    <div className="content-container">
      <Title>News Simulation</Title>
      <div>{activeCase}</div>
      <div className="contentVisual"><img src={items[0].image}/></div>
    </div>
  );
};

export default Content;