"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface InputFieldProps {
  type: "text" | "password" | "email" | "number" | "tel" | "url";
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  id?: string;
  register?: any; // For use with react-hook-form
  validation?: any; // Validation rules for react-hook-form
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  placeholder,
  error,
  id,
  register,
  validation,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative mb-4 w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          id={id}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          {...(register && register(id, validation))}
        />
        {type === "password" && (
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={handleTogglePassword}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="text-gray-500"
            />
          </span>
        )}
      </div>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
