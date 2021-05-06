import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [info, setInfo] = useState(true);
  return (
    <>
      <div className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn">btn</button>
        </header>
      </div>
    </>
  );
};
export default Question;
