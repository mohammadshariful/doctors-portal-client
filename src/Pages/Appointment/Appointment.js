import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer.js";
import AppointmentBanner from "./AppointmentBanner.js";
import AvailableAppointments from "./AvailableAppointments.js";
const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointments date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
