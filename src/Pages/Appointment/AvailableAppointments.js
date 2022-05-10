import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ date }) => {
  return (
    <div>
      <h3 className="text-center text-secondary text-xl">
        Avaiable Appointment on {format(date, "PP")}
      </h3>
    </div>
  );
};

export default AvailableAppointments;
