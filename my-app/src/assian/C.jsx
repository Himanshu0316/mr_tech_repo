import React from "react";
import { useNavigate } from "react-router";
import "./Main.css";


const C = ({ id, title, status }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="FlexDiv">
        <h3>
          {title}
        </h3>
      </div>
    </>
  );
};

export default C;