"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LockClosedIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { Event, LoginFormData } from "../../register/components/types";
import TextField from "../../register/components/TextField";
import "@/app/admin/register/page.css";
function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: Event["changeEvent"]) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: Event["submitEvent"]) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Login attempt with:", formData);
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <TextField formData={formData} name="email" handleChange={handleChange} />
      <TextField
        formData={formData}
        name="password"
        handleChange={handleChange}
      />
      <Help
        isLoading={isLoading}
        formData={formData}
        handleChange={handleChange}
      />
    </form>
  );
}
function Help({
  formData,
  handleChange,
  isLoading,
}: {
  formData: LoginFormData;
  handleChange: (e: Event["changeEvent"]) => void;
  isLoading: boolean;
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="rememberMe"
            type="checkbox"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="h-4 w-4 rounded border-neutral-300 text-sky-600 focus:ring-sky-500"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-neutral-700"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link
            href="/admin/forgot-password"
            className="font-medium text-sky-600 hover:text-sky-500 transition-colors"
          >
            Forgot your password?
          </Link>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className={`group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-200 ${
            isLoading ? "opacity-80 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <span className="flex items-center">
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
              Signing in...
            </span>
          ) : (
            "Sign in"
          )}
        </button>
      </div>
    </>
  );
}
export default Form;
