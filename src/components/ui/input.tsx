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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
} & React.ComponentProps<"input">;
export const Input = ({
  placeholder,
  filled,
  type,
  icon,
  value,
  onChange,
  onEnter,
  ...props
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key.toLocaleLowerCase() === "enter") {
      onEnter && onEnter();
    }
  };

  return (
    <div
      className={`has-[:focus]:border-white flex items-center  px-4 py-2 rounded-3xl border-2 border-gray-700 ${
        filled && "bg-gray-700"
      } ${props.className}`}
    >
      {icon && (
        <FontAwesomeIcon className="size-6 text-gray-500 mr-4" icon={icon} />
      )}
      <input
        type={type === "password" && showPassword ? "text" : type}
        className="flex-1 outline-none bg-transparent h-full"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange && onChange(e);
        }}
        onKeyUp={handleKeyUp}
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
