import React from "react";
import starImg from "./images/icon-star.svg";
import "./styles/Rating.css";
import { useNavigate } from "react-router-dom";

const Rating = ({ changeStateSubmited,changeItem }) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    changeStateSubmited();
    navigate("/thankyou"); // redirect to ThankYou page
  };

  return (
    <div className="wrapper">
      <div className="image">
        <img src={starImg} alt="star" />
      </div>
      <h2 className="title">How did your peer do?</h2>
      <p className="text">
        Please let us know how was your experience. All feedback is
        appreciated to help us improve our services!
      </p>
      <div className="buttons">
        <button onClick={()=>changeItem(1)}>1</button>
        <button onClick={()=>changeItem(2)}>2</button>
        <button onClick={()=>changeItem(3)}>3</button>
        <button onClick={()=>changeItem(4)}>4</button>
        <button onClick={()=>changeItem(5)}>5</button>
      </div>
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
};
export default Rating;
