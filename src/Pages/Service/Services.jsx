import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-4 mt-10">
        <h3 className="text-[#FF3811] font-bold">Service</h3>
        <h1 className="font-bold text-3xl"> Our Service Area </h1>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item) => (
          <ServiceCard key={item._id} service={item}></ServiceCard>
        ))}
      </div>
      <a className="btn btn-outline text-center mt-6 mb-6 lg:mx-[550px]  text-[#FF3811]">
        More Services
      </a>
    </div>
  );
};

export default Services;
