"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function useValidation() {
  const [formData, setFormData] = useState({
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
export const handleChange = (e, setFormData, setError) => {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
  setError("");
};
export const handleSubmit = async (setError, setIsLoading, formData) => {
  setError("");

  const validationError = validateForm(formData);
  if (validationError) {
    setError(validationError);
    return;
  }

  setIsLoading(true);

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Registration attempt with:", {
      username: formData.username,
      email: formData.email,
    });

    // Registration successful - redirect to login
    router.push("/admin/login?registered=true");
  } catch (err) {
    setError(err.message || "Registration failed. Please try again.");
  } finally {
    setIsLoading(false);
  }
};
export const validateForm = (formData) => {
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
