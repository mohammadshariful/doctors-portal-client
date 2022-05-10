import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bgImg from "../../assets/images/bg.png";
import Chair from "../../assets/images/chair.png";
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{
        background: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img
            src={Chair}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="dentist chair"
          />
        </div>
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
