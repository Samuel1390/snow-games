"use client";

import React from "react";
import {
  UserIcon,
  LockClosedIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useValidation, { handleSubmit } from "./hooks/useValidation";

const Form = () => {
  const {
    isLoading,
    setIsLoading,
    setShowConfirmPassword,
    showConfirmPassword,
    showPassword,
    setShowPassword,
    error,
    setError,
    formData,
    setFormData,
  } = useValidation();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
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

  const router = useRouter();
  return (
    <form className="space-y-5" onSubmit={handleOnSubmit}>
      {/* Username */}
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          Username
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UserIcon className="h-5 w-5 text-neutral-400" />
          </div>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            value={formData.username}
            onChange={handleChange}
            className="block text-neutral-900 w-full pl-10 pr-3 py-3 border border-neutral-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 placeholder-neutral-400"
            placeholder="Choose a username"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <EnvelopeIcon className="h-5 w-5 text-neutral-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block text-neutral-900 w-full pl-10 pr-3 py-3 border border-neutral-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 placeholder-neutral-400"
            placeholder="Enter your email"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LockClosedIcon className="h-5 w-5 text-neutral-400" />
          </div>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            required
            value={formData.password}
            onChange={handleChange}
            className="block text-neutral-900 w-full pl-10 pr-10 py-3 border border-neutral-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 placeholder-neutral-400"
            placeholder="Create a password"
          />
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
        </div>

        {/* Password Requirements */}
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

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          Confirm Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LockClosedIcon className="h-5 w-5 text-neutral-400" />
          </div>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            autoComplete="new-password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="block text-neutral-900 w-full pl-10 pr-10 py-3 border border-neutral-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 placeholder-neutral-400"
            placeholder="Confirm your password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showConfirmPassword ? (
              <EyeSlashIcon className="h-5 w-5 text-neutral-400 hover:text-neutral-600 transition-colors" />
            ) : (
              <EyeIcon className="h-5 w-5 text-neutral-400 hover:text-neutral-600 transition-colors" />
            )}
          </button>
        </div>
      </div>

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

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-lg text-base font-medium text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-200 shadow-lg hover:shadow-xl ${
          isLoading ? "opacity-90 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Creating Account...
          </>
        ) : (
          "Create Account"
        )}
      </button>
    </form>
  );
};

export default Form;
