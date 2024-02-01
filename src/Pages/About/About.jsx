import React from "react";
import person from "../../../src/assets/images/about_us/person.jpg";
import parts from "../../../src/assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-2xl font-bold text-[#FF3811]">About Us</h1>
          <h3 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h3>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
