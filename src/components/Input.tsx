import React from "react";
import { ChangeEvent } from "react";

interface InputProps {
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  additionalClasses?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  setValue,
  type = "text",
  required,
  disabled,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      className="border py-2 px-4 rounded-lg w-full text-gray-700 leading-tight outline-none"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required={required}
      disabled={disabled}
    />
  );
};

export default Input;
