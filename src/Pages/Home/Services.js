import React from "react";
import cavity from "../../assets/images/cavity.png";
import Fluride from "../../assets/images/fluoride.png";
import whiening from "../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluride Treatment",
      description: "",
      img: Fluride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whiting",
      description: "",
      img: whiening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center ">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
