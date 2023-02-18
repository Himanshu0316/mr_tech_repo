import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Routes, Route } from "react-router-dom";
import A from "./A";


const Main = () => {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<A />}></Route>
        </Routes>
      </Provider>
    </div>
  );
};

export default Main;