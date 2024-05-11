import React from "react";
import Home from "./home/Home";
import { Routes, Route, Navigate } from "react-router-dom";

import Courses from "./courses/Courses";

// import Login from "./component/Login";
import Signup from "./component/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to={"/signup"} />}
        />
         
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
