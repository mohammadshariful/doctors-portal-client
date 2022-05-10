import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryBtn from "../Shared/PrimaryBtn/PrimaryBtn";
const HomeContact = () => {
  return (
    <section
      className="py-12 w-full"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="text-center">
        <h3 className="text-xl text-secondary font-bold uppercase">
          Contact Us
        </h3>
        <h2 className="text-4xl text-white">Stay connected with us</h2>
      </div>
      <div className="text-center my-3">
        <form>
          <input
            type="email"
            placeholder="Email"
            class="input input-bordered input-md "
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Subject"
            class="input input-bordered input-md"
          />
          <br />
          <br />
          <textarea
            class="textarea textarea-white"
            placeholder="Your Message"
          ></textarea>
          <br />
          <br />
          <PrimaryBtn type="submit">Submit</PrimaryBtn>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
