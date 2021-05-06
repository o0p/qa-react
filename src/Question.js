import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [displayInfo, setDisplayInfo] = useState(true);
  return (
    <>
      <div className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn">btn</button>
        </header>
        {displayInfo && <p>{info}</p>}
      </div>
    </>
  );
};
export default Question;
