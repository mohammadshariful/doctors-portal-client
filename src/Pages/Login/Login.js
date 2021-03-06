import React, { useEffect, useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import useToken from "../../Hooks/useToken";
import Loading from "../Shared/Loading/Loading";
import ForgetPassword from "./ForgetPassword";
const Login = () => {
  const [reset, setReset] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const email = watch("email");

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user2, loading2, error2] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user || user2);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  if (loading || loading2) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  // const handlePasswordReset = () => {};
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
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
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors?.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors?.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {(error || error2) && (
              <p className="mb-2 text-red-500 font-semibold text-center">
                {error?.message} {error2?.message}
              </p>
            )}
            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Login"
            />
          </form>
          <label
            onClick={() => setReset(true)}
            htmlFor="forgetPasswordModal"
            className="modal-button text-right text-secondary cursor-pointer"
          >
            Forget your password?
          </label>
          <p>
            New to Doctors prtal?
            <Link className="text-secondary" to="/signup">
              Create a New Account
            </Link>
          </p>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
      {reset && <ForgetPassword setReset={setReset} />}
    </div>
  );
};

export default Login;
