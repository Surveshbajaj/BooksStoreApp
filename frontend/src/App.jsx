import React from "react";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";

import Courses from "./courses/Courses";

// import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Courses />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
