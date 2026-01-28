"use client";

import Link from "next/link";
import "./page.css";
import FormCard from "./components/FormCard";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function RegisterPage() {
  return (
    <main className="main-container">
      <div className="absolute top-6 left-6">
        <Link href="/" className="back-to-home-link">
          <ArrowLeftIcon className="h-5 w-5" />
          Back to Home
        </Link>
      </div>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="logo-box">
              <h2 className="text-4xl font-bold">SG</h2>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-neutral-50 mb-2">
            Join Snow Games
          </h1>
          <p className="text-neutral-400">
            Create your account to start gaming
          </p>
        </div>

        <FormCard />

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-300">
            By registering, you confirm you are at least 13 years old
          </p>
          <p className="mt-2 text-xs text-neutral-50">
            © {new Date().getFullYear()} Snow Games. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
