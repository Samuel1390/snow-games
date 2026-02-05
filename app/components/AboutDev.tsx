import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/samuel-david-nelo-132632378/",
  github: "https://github.com/Samuel1390",
  portfolio:
    "https://samuel-nelo-portfolio-epp1lra1y-samuel-nelos-projects.vercel.app",
};

const profileImageUrl =
  "https://media.licdn.com/dms/image/v2/D4E03AQHqNEd3HidT-Q/profile-displayphoto-scale_200_200/B4EZv20QsTHUB0-/0/1769372455364?e=1772064000&v=beta&t=b7MO6X3m85FUPm8eUXYScLEbpt-k3p2BN8Xc6sdnv5w";

const AboutDev = () => {
  return (
    <Link
      href={socialLinks.portfolio}
      rel="noopener"
      target="_blank"
      className="w-full group mx-auto rounded"
    >
      <HoverCard key={"right"} openDelay={100} closeDelay={100}>
        <HoverCardTrigger asChild>
          <div className="flex hover:bg-slate-800/30 rounded-md p-2 gap-4 items-center justify-center mx-auto w-[95%]">
            <div className="max-w-16 rounded-full shadow-xl">
              <Image
                className="rounded-full"
                src={profileImageUrl}
                alt="Samuel Nelo's image"
                width={100}
                height={100}
              />
            </div>
            <h2 className="font-bold group-hover:underline group-hover:text-amber-400 text-sm">
              Developed by Samuel Nelo
            </h2>
            <div className="m-2 hover-none text-amber-400 font-bolder opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowRightIcon width={20} />
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="z-600" side={"right"}>
          <SocialButtons />
        </HoverCardContent>
      </HoverCard>
    </Link>
  );
};

import React from "react";
import { FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="max-w-4xl w-full bg-sky-100 rounded-2xl shadow-xl p-3">
      <div className="text-center mb-1">
        <h2 className="text-lg font-bold text-gray-800 my-2">
          Samuel Nelo - Frontend developer
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Front-end Developer💻 with a passion for Software and Technology.
          Dedicated to creating web applications that are both functional and
          visually appealing.
        </p>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-md bg-white border border-gray-300 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-300 group"
          >
            <FaLinkedinIn className="text-xl group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">LinkedIn</span>
          </a>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-md bg-white border border-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 group"
          >
            <FaGithub className="text-xl group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href={socialLinks.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 rounded-md bg-white border border-gray-300 hover:bg-linear-to-r hover:from-purple-600 hover:to-pink-500 hover:text-white hover:border-purple-600 transition-all duration-300 group"
          >
            <FaGlobe className="text-xl group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">Portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutDev;
