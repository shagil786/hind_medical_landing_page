"use client";
import InputField from "@/common/CommonInput/CommonInput";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: any;
}
interface LoginFormInputs {
  email: string;
  password: string;
}

const MainSection: React.FC<Props> = (props) => {
  const { onSubmit } = props;
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

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[a-zA-Z]/.test(password)) {
      return "Password must contain at least one letter";
    }
    if (!/\d/.test(password)) {
      return "Password must contain at least one number";
    }
    if (!/[^\w\s]/.test(password)) {
      return "Password must contain at least one special character";
    }
    return true; // Return true if all validation checks pass
  };

  return (
    <main className="flex h-full overflow-auto flex-col items-center p-4 py-10 md:p-10 text-black bg-white dark:text-white dark:bg-black">
      <form onSubmit={handleSubmit(onSubmit)} className="w-9/12 relative h-full">
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
        <Button
          className="w-full bg-blue-450 disabled:bg-default absolute bottom-0"
          type="submit"
          disabled={disabled}
        >
          Login
        </Button>
      </form>
    </main>
  );
};

export default MainSection;
