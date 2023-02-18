import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { getTextError, getTextReq, getTextSuccess } from "./Textdata/action";
import "./Main.css";

const B = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    //e.preventDefault();
    
    const payload = {
      id: uuid(),
      title,
      status: false,
    };

    fetch("http://localhost:8080/textdata", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }).then(() => {
      dispatch(getTextReq());
      fetch("http://localhost:8080/textdata")
        .then((res) => res.json())
        .then((data) => dispatch(getTextSuccess(data)))
        .catch(() => dispatch(getTextError()));
    });
    setTitle("");
  };
  return (
    <div className="flex">
      <div
        style={{
          width: 500,
          maxWidth: "90%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <input
          fullWidth
          value={title}
          label="Add Text"
          onChange={(e)=>setTitle(e.target.value)}
          
        />
      </div>
      <button
        onClick={() => {
          if (title.trim()) {
            handleAdd();
          }
        }}
        variant="outlined"
      >
        Add Text
      </button>
    </div>
  );
};

export default B;