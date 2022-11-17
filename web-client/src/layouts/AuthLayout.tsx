import React, { ReactNode, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const methods = useForm();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);
  return (
    <div className="bg-gray-300/40 h-screen flex items-center">
      <FormProvider {...methods}>
        <div className="bg-white container h-auto w-auto ml-56 p-5 rounded-md shadow-2xl">
          {" "}
          {children}
        </div>
      </FormProvider>
    </div>
  );
};

export default AuthLayout;
