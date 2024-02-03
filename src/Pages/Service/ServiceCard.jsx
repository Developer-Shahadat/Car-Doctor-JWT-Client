import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} className="rounded-xl" />
      </figure>
      <div className="card-body ml-4">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between mt-4">
          <p className="text-[#FF3811] font-bold mt-4">Price:${price}</p>
          <button className=" btn btn-circle">
            <FaArrowRight className=" text-[#FF3811] text-xl" />
          </button>
        </div>
      </div>
    </div>
   
    </div>
    
  );
};

export default ServiceCard;
