import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";

const ForgetPassword = ({ setReset }) => {
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    sendPasswordResetEmail(data.email);
    toast.success("Email Sent!", {
      position: toast.POSITION.TOP_CENTER,
    });
    setReset(false);
  };
  return (
    <div>
      <input
        type="checkbox"
        id="forgetPasswordModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="forgetPasswordModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-center text-xl">Reset Your password</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 justify-items-center mt-3"
          >
            <div className="form-control w-full max-w-xs">
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Reset"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
