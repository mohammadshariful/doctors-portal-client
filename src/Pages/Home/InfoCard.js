import React from "react";

const InfoCard = ({ img, cardTitle, bgColor }) => {
  return (
    <div className={`card lg:card-side shadow-xl ${bgColor}`}>
      <figure className="px-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
