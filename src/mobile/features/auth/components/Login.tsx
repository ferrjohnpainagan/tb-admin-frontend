import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Logo from "../../../../img/sorpresa-logo.png";
import Loader from "../../../../shared/Loader";

interface LoginInputs {
  username: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

  return (
    <>
      <div className="w-screen h-screen bg-defaultGray flex justify-center items-center flex-col">
        <div className="w-2/5">
          <img src={Logo} alt="logo" />
        </div>

        <div className="w-3/4 py-12">
          <form>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
              id="username"
              type="text"
              placeholder="Username"
              {...register("username", { required: true })}
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
