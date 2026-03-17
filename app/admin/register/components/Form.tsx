"use client";

import React, { ChangeEvent } from "react";
import TextField from "./TextField";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import useValidation, { handleSubmit } from "./hooks/useValidation";
import { Event, RegisterFormData } from "./types";
import SubmitBtn from "./SubmitBtn";

const Form = () => {
  const { isLoading, setIsLoading, error, setError, formData, setFormData } =
    useValidation();

  const handleChange = (changeEvent: Event["changeEvent"]) => {
    const { name, value, type, checked } = changeEvent.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };
  const handleOnSubmit = async (submitEvent: Event["submitEvent"]) => {
    submitEvent.preventDefault();
    handleSubmit(setError, setIsLoading, formData);
  };
  const passwordRequirements = [
    {
      id: 1,
      text: "At least 6 characters",
      met: formData.password.length >= 6,
    },
    { id: 2, text: "Contains a number", met: /\d/.test(formData.password) },
    {
      id: 3,
      text: "Contains a special character",
      met: /[!@#$%^&*]/.test(formData.password),
    },
  ];

  return (
    <form className="space-y-5" onSubmit={handleOnSubmit}>
      <TextField
        formData={formData}
        name="username"
        handleChange={handleChange}
      />
      <TextField formData={formData} name="email" handleChange={handleChange} />
      <TextField
        formData={formData}
        name="password"
        handleChange={handleChange}
      />

      <div>
        <div className="mt-3 space-y-2">
          {passwordRequirements.map((req) => (
            <div key={req.id} className="flex items-center gap-2">
              <CheckCircleIcon
                className={`h-4 w-4 ${req.met ? "text-green-500" : "text-neutral-300"}`}
              />
              <span
                className={`text-xs ${req.met ? "text-green-600" : "text-neutral-500"}`}
              >
                {req.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <TextField
        formData={formData}
        handleChange={handleChange}
        name="confirmPassword"
      />

      {/* Terms Agreement */}
      <div className="flex items-start">
        <input
          id="agreeToTerms"
          name="agreeToTerms"
          type="checkbox"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className="h-4 w-4 mt-1 rounded border-neutral-300 text-sky-600 focus:ring-sky-500"
        />
        <label htmlFor="agreeToTerms" className="ml-3 text-sm text-neutral-700">
          I agree to the{" "}
          <Link
            href="/terms"
            className="text-sky-600 hover:text-sky-700 font-medium"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="text-sky-600 hover:text-sky-700 font-medium"
          >
            Privacy Policy
          </Link>
        </label>
      </div>

      <SubmitBtn isLoading={isLoading} />
    </form>
  );
};

export default Form;
