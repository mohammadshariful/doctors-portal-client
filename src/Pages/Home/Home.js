import React from "react";
import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner";
import DentalCare from "./DentalCare";
import HomeContact from "./HomeContact";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <Services />
      <DentalCare />
      <MakeAppointment />
      <Testimonials />
      <HomeContact />
      <Footer />
    </div>
  );
};

export default Home;
