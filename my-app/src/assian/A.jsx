import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTextError, getTextReq, getTextSuccess } from "./Textdata/action";
import C from "./C";
import B from "./B";
 import "./Main.css";
import { useParams } from "react-router-dom";

const A = () => {
  const { isLoading, isError, textdata } = useSelector((state) => state);

   const dispatch = useDispatch();

   const { id } = useParams();

  useEffect(() => {
    
    fetch("http://localhost:8080/textdata")
      .then((res) => res.json())
      .then((data) => dispatch(getTextSuccess(data)))
      .catch(() => dispatch(getTextError()));
    
  }, [dispatch, id]);
   
  return  isLoading ? (
    <h1 style={{ textAlign: "center" }}>Loading....</h1>
  ) : isError ? (
    <h1 style={{ textAlign: "center" }}>Error... Something went wrong</h1>
  ) : (
    <div className="main_container">
      <h1 style={{ textAlign: "center" }}>Texts</h1>
      <B />
      <br />
      {textdata.map((item) => <C key={item.id} {...item} />)}
    </div>
  );
};

export default A;