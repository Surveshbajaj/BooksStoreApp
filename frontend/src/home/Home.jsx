import React from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import FreeBooks from "../component/FreeBooks";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBooks />
      <Footer />
    </>
  );
}

export default Home;
