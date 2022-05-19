import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0eDkIX01rI0JuNooewaoPydMJGC1dTqDrRkTBuz6GsN4wfCJvFMeFIlsm4eYXupX84rhJOaf4xekvuwUT6MjAv00LG7mU9kb"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center">
      <div class="card w-50 max-w-md bg-base-100 shadow-xl">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello,{appointment?.patinetName}
          </p>
          <h2 class="card-title">Please Pay for {appointment?.treatment}</h2>
          <p>
            Your Appointment :
            <span className="text-orange-700">
              {appointment.date} {appointment.slot}
            </span>
          </p>
          <p>Please pay : ${appointment.price}</p>
        </div>
      </div>
      <div class="card my-12 w-full max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
