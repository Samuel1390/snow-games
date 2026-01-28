"use client";
import { options } from "@/app/components/Sidebar";
import {
  ContinueWithGithubBtn,
  ContinueWithGoogleBtn,
  FooterInfo,
  Options,
} from "./components/Buttons.jsx";
import Form from "./components/Form";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 to-sky-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="relative sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-sky-700 to-sky-500 shadow-neutral-950/60 shadow-xl text-white p-3 rounded-xl">
            <h2 className="text-4xl font-bold">SG</h2>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-neutral-50">
          Snow Games
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-300">
          Your digital video game store
        </p>
      </div>
      <div className="flex text-neutral-50/30 scale-150 hover-none max-w-100 m-auto mt-7 w-full justify-evenly">
        {options.map((option) => {
          return <div key={option.platform + "Id"}>{option.icon}</div>;
        })}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg shadow-sky-100/50 sm:rounded-lg sm:px-10 border border-neutral-200">
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
