import React, { useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;


const Buttons = ({elements}) => {
    const [activeAnswer, setActiveAnswer] = useState([]);

    const onButtonClick = () => {
        setActiveAnswer(activeAnswer + 1);
        
    }



  return (
    <div className="answer-buttons">
      <button onClick={() => onButtonClick()}>{activeAnswer[0]}</button>
      <br />
      <button onClick={() => onButtonClick()}>{activeAnswer[1]}</button>
      <br />
      <button onClick={() => onButtonClick()}>{activeAnswer[2]}</button>
    </div>
  );
};

export default Buttons;