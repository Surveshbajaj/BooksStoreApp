import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
// import { get } from "mongoose";s
// import books from "../../public/data.json"

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        console.log(res.data);
        setBook(res.data);
      
      } catch (err) {
        console.log(err);
      }
    
    }
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" mt-28 justify-center items-center text-center">
          <h1 className="text-2xl ">
            Lorem ipsum dolor sit amet consectetur{" "}
            <span className="text-pink-500">Lorem, ipsum.</span>.
          </h1>
          <p className="mt-6 font-medium leading-7 text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            dolorem distinctio animi asperiores necessitatibus cum, temporibus
            ratione. Magnam quia ut delectus deleniti, enim cumque quidem nobis
            porro eveniet nostrum corrupti iste dicta laboriosam eum ullam
            asperiores commodi sapiente ex rem, accusantium omnis laudantium,
            facere soluta. Magni aliquam corrupti vero doloribus?
          </p>
          <button className=" bg-pink-500 hover:bg-pink-700 duration-300 text-white px-4 py-2 rounded-md mt-6 ">
            <Link to="/">Back</Link>
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
//vivek was here 