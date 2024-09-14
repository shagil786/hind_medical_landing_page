"use client";
import InputField from "@/common/CommonInput/CommonInput";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaTwitter, FaGoogle, FaApple } from "react-icons/fa";

interface Props {
  onSubmit: any;
  validatePassword: any;
}
interface LoginFormInputs {
  email: string;
  password: string;
}

const deviceType = /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);

const socialLogin = (
  <div className="flex flex-col space-y-4 mt-6">
    <button className="flex items-center justify-center w-full p-2 bg-blue-600 text-white rounded-md">
      <FaFacebook className="mr-2" />
      Continue with Facebook
    </button>
    <button className="flex items-center justify-center w-full p-2 bg-blue-400 text-white rounded-md">
      <FaTwitter className="mr-2" />
      Continue with Twitter
    </button>
    <button className="flex items-center justify-center w-full p-2 bg-red-600 text-white rounded-md">
      <FaGoogle className="mr-2" />
      Continue with Google
    </button>
    {deviceType && (
      <button className="flex items-center justify-center w-full p-2 bg-black text-white rounded-md">
        <FaApple className="mr-2" />
        Continue with Apple
      </button>
    )}
  </div>
);

const MainSection: React.FC<Props> = (props) => {
  const { onSubmit, validatePassword } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<LoginFormInputs>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const email = watch("email");
  const password = watch("password");
  const disabled = !isValid || !email || !password;

  return (
    <main className="flex h-full overflow-auto flex-col items-center p-4 py-10 md:p-10 text-black bg-white dark:text-white dark:bg-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-9/12 relative h-full"
      >
        <InputField
          type="email"
          id="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          }}
          error={errors.email?.message}
        />
        <InputField
          type="password"
          id="password"
          label="Password"
          placeholder="Enter your password"
          register={register}
          validation={{
            required: "Password is required",
            validate: validatePassword,
          }}
          error={errors.password?.message}
        />
        <p className="text-blue-450">Forgort Password?</p>
        <Button
          className="w-full bg-blue-450 disabled:bg-default absolute bottom-0"
          type="submit"
          disabled={disabled}
        >
          Login
        </Button>
        <div className="flex justify-between items-center my-4">
          <hr className="w-full" />
          <p className="px-4">OR</p>
          <hr className="w-full" />
        </div>
        {socialLogin}
      </form>
    </main>
  );
};

export default MainSection;
