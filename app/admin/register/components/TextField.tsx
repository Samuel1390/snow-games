import React, { Dispatch, SetStateAction, useState } from "react";
import { LoginFormData, RegisterFormData, Event, Target } from "./types";
import {
  UserIcon,
  LockClosedIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

interface Props {
  formData: LoginFormData | RegisterFormData;
  name: Target["name"];
  handleChange: (changeEvent: Event["changeEvent"]) => void;
}

const ICON_CLASSNAME: string = "h-5 w-5 text-neutral-400";
const ICONS = {
  password: <LockClosedIcon className={ICON_CLASSNAME} />,
  username: <UserIcon className={ICON_CLASSNAME} />,
  email: <EnvelopeIcon className={ICON_CLASSNAME} />,
};

const TextField = ({ formData, name, handleChange }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const getValue = (): string => {
    if (name in formData) {
      const value = formData[name as keyof typeof formData];
      if (typeof value === "boolean") return String(value);
      return value as string;
    }
    return "";
  };
  return (
    <>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-neutral-700 mb-2 first-letter:uppercase"
      >
        {name === "confirmPassword" ? "Confirm password" : name}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {name === "password" || name === "confirmPassword"
            ? ICONS.password
            : name === "email"
              ? ICONS.email
              : ICONS.username}
        </div>
        <input
          id={name}
          name={name}
          type={
            showPassword || !name.toLowerCase().includes("password")
              ? "text"
              : "password"
          }
          autoComplete={name}
          required
          value={getValue()}
          onChange={handleChange}
          className="text-input"
          placeholder={name === "confirmPassword" ? "Confirm password" : name}
        />
        {name === "password" && (
          <ToogleShowPasswordBtn
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        )}
      </div>
    </>
  );
};
const ToogleShowPasswordBtn = ({
  showPassword,
  setShowPassword,
}: {
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
}) => {
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
