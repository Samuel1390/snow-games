import React from "react";
import Form from "./Form";
import Link from "next/link";
import useValidation from "./hooks/useValidation";
const FormCard = () => {
  const { error } = useValidation();
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-sky-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">Create Account</h2>
        <p className="text-neutral-600 mt-2">
          Sign up to access thousands of games
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm font-medium">{error}</p>
        </div>
      )}

      <Form />

      {/* Login Link */}
      <div className="mt-8 pt-6 border-t border-neutral-200 text-center">
        <p className="text-neutral-600">
          Already have an account?{" "}
          <Link
            href="/admin/login"
            className="font-semibold text-sky-600 hover:text-sky-700 transition-colors"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FormCard;
