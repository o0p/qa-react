import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  return (
    <>
      <div className="question">
        <header>
          <h4>{title}</h4>
        </header>
      </div>
    </>
  );
};
export default Question;
