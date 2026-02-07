"use client";
import { options } from "@/app/components/Sidebar";
import {
  ContinueWithGithubBtn,
  ContinueWithGoogleBtn,
  FooterInfo,
  Options,
} from "./components/Buttons.jsx";
import Form from "./components/Form";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link.js";
import "./login-styles.css";

export default function LoginPage() {
  return (
    <div className="container">
      <div className="absolute top-6 left-6">
        <Link href="/" className="back-to-home-link">
          <ArrowLeftIcon className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
      <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="logo">
            <h2 className="text-4xl font-bold">SG</h2>
          </div>
        </div>
        <h2 className="snow-games">Snow Games</h2>
        <p className="mt-2 text-center text-sm text-neutral-300">
          Your digital video game store
        </p>
      </div>
      <div className="icons-container hover-none">
        {options.map((option) => {
          return <div key={option.platform + "Id"}>{option.icon}</div>;
        })}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="form-container">
          <Form />

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-neutral-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <ContinueWithGoogleBtn />
              <ContinueWithGithubBtn />
            </div>
          </div>

          <Options />
        </div>
        <FooterInfo />
      </div>
    </div>
  );
}
