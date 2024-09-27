"use client";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
  placeholder: string;
  type?: string;
  filled?: boolean;
  icon?: IconDefinition;
  value?: string;
  onChange?: (newValue: string) => void;
};
export const Input = ({
  placeholder,
  filled,
  type,
  icon,
  value,
  onChange,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`has-[:focus]:border-white flex items-center h-14 px-4 rounded-3xl border-2 border-gray-700 ${
        filled && "bg-gray-700"
      }`}
    >
      {icon && (
        <FontAwesomeIcon className="size-6 text-gray-500 mr-4" icon={icon} />
      )}
      <input
        type={type === "password" && showPassword ? "text" : type}
        className="flex-1 outline-none bg-transparent h-full "
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      {type === "password" && (
        <FontAwesomeIcon
          icon={showPassword ? faEye : faEyeSlash}
          className="size-6 text-gray-500 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
    </div>
  );
};
