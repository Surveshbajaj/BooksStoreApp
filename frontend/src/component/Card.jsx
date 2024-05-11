import React from "react";

function Card({item}) {
  return (
    <>
      <div className="p-2"> 
       
        <div className="card w-92 h-92 bg-base-200 shadow-xl my-6 transition-all duration-200 hover:scale-95 ;">
          <figure>
            <img
             
               src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary  py-6">{item.category}</div>
            </h2>
            <p>{item.discription}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{item.price}</div>
              <div className="badge badge-outline py-3 px-4 hover:bg-pink-400 hover:text-black">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
