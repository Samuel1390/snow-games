"use client";

import { FormData } from "../types";
import { useState } from "react";
import { Event } from "../types";
function useValidation() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  return {
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
  };
}
type SetState = {
  setFormData: (callback?: (prev: FormData) => void) => void;
  setError: (error: string) => void;
  setIsloading: (state: boolean) => void;
};
export const handleChange = (
  changeEvent: Event["changeEvent"],
  setFormData: SetState["setFormData"],
  setError: SetState["setError"],
) => {
  const { name, value, type, checked } = changeEvent.target;
  setFormData((prev: FormData) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
  setError("");
};
export const handleSubmit = async (
  setError: SetState["setError"],
  setIsLoading: SetState["setIsloading"],
  formData: FormData,
) => {
  setError("");

  const validationError = validateForm(formData);
  if (validationError) {
    setError(validationError);
    return;
  }

  setIsLoading(true);

  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("Registration attempt with:", {
      username: formData.username,
      email: formData.email,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message || "Registration failed. Please try again.");
    }
  } finally {
    setIsLoading(false);
  }
};
export const validateForm = (formData: FormData) => {
  if (
    !formData.username ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    return "All fields are required";
  }

  if (!formData.email.includes("@")) {
    return "Please enter a valid email address";
  }

  if (formData.password.length < 6) {
    return "Password must be at least 6 characters long";
  }

  if (formData.password !== formData.confirmPassword) {
    return "Passwords do not match";
  }

  if (!formData.agreeToTerms) {
    return "You must agree to the Terms of Service";
  }

  return null;
};
export default useValidation;
