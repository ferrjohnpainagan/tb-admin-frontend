import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { signInAdmin } from "../../../../redux/auth/actions";

import Logo from "../../../../img/sorpresa-logo.png";
import Loader from "../../../../shared/Loader";

interface LoginInputs {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    dispatch(signInAdmin(data));
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="w-screen h-screen bg-defaultGray flex justify-center items-center flex-col">
        <div className="w-2/5">
          <img src={Logo} alt="logo" />
        </div>

        <div className="w-3/4 py-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
              id="email"
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <button className="bg-defaultPurple w-full py-2 my-3 rounded-full text-white">
              Login
            </button>
          </form>
        </div>
      </div>
      {/* <Loader /> */}
    </>
  );
};

export default Login;
