import React, { useState } from "react";
import { FormInput } from "../components";
import LoadingButton from "../components/buttons/LoadingButton";
import AuthLayout from "../layouts/AuthLayout";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit } = useForm();

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
  };
  return (
    <AuthLayout>
      <div className="text-center flex w-96 flex-col items-center">
        <img src={logo} alt="" className="h-20 w-20" />
        <h1 className="font-bold text-xl">Login</h1>
        <div>
          <p className="text-xs tracking-wide">Welcome back to iLearn</p>
          <form className="w-96" onSubmit={handleSubmit(onSubmitHandler)}>
            <FormInput name="email" label="Email" />
            <FormInput name="password" label="Password" />
            <LoadingButton loading={isLoading}>Sign In</LoadingButton>
          </form>

          <div className="mt-5">
            Don't have an account?{" "}
            <Link to="register" className="underline text-orange-500/70">
              sign up
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
