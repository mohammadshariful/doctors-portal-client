import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="text-xl text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]} </span>
          ) : (
            <span className="text-red-500">Try Another Day</span>
          )}
        </p>
        <p className="text-sm font-semibold uppercase">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            for="booking-modal"
            class="btn btn-sm modal-button btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
