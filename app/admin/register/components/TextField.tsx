import React from "react";
import { FormData, Event } from "./types";
import useValidation from "./hooks/useValidation";
import {
  UserIcon,
  LockClosedIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

interface Props {
  formData: FormData;
  name: "username" | "email" | "password" | "confirmPassword";
  handleChange: (changeEvent: Event["changeEvent"]) => void;
}

const TextField = ({ formData, name, handleChange }: Props) => {
  const { showPassword } = useValidation();
  const iconClassName: string = "h-5 w-5 text-neutral-400";
  const lockClosedIcon = <LockClosedIcon className={iconClassName} />;
  const userIcon = <UserIcon className={iconClassName} />;
  const mailIcon = <EnvelopeIcon className={iconClassName} />;
  return (
    <>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-neutral-700 mb-2 first-letter:uppercase"
      >
        {name === "confirmPassword" ? name.split("P").join(" p") : name}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {name === "password" || "confirm password"
            ? lockClosedIcon
            : name === "email"
              ? mailIcon
              : userIcon}
        </div>
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          required
          value={formData[name]}
          onChange={handleChange}
          className="text-input"
          placeholder={
            name === "confirmPassword" ? name.split("P").join(" p") : name
          }
        />
        {name === "password" && <ToogleShowPasswordBtn />}
      </div>
    </>
  );
};
const ToogleShowPasswordBtn = () => {
  const { setShowPassword, showPassword } = useValidation();
  return (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute inset-y-0 right-0 pr-3 flex items-center"
    >
      {showPassword ? (
        <EyeSlashIcon className="h-5 w-5 text-neutral-400 hover:text-neutral-600 transition-colors" />
      ) : (
        <EyeIcon className="h-5 w-5 text-neutral-400 hover:text-neutral-600 transition-colors" />
      )}
    </button>
  );
};

export default TextField;
