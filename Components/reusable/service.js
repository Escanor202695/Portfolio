import React from "react";
import {
  DesktopComputerIcon,
  CodeIcon,
  PhotographIcon,
  MailIcon,
  DeviceMobileIcon,
  AtSymbolIcon,
  UserCircleIcon,
  ExternalLinkIcon,
} from "@heroicons/react/outline";
const serviceList = [
  {
    title: "Frontend Development",
    description: "Get high performing frontend for your website",
    icon: (
      <CodeIcon className="w-7 h-7 md:w-[4vw] md:h-[4vw] mb-[.75vw] md:text-theme stroke-[.12rem] md:md:stroke-[.1vw] drop-shadow-sm shadow-theme" />
    ),
  },
  {
    title: "UX/UI design",
    description: "Get eye-catching and user-friendly UI for your website or app",
    icon: (
      <DeviceMobileIcon className="w-7 h-7 md:w-[4vw] md:h-[4vw] mb-[.75vw] md:text-theme stroke-[.12rem] md:md:stroke-[.1vw] drop-shadow-sm shadow-theme" />
    ),
  },
  {
    title: "Landing Page Design",
    description: "Generate more traffic with a modern-looking landing page",
    icon: (
      <DesktopComputerIcon className="w-7 h-7 md:w-[4vw] md:h-[4vw] mb-[.75vw] md:text-theme stroke-[.12rem] md:md:stroke-[.1vw] drop-shadow-sm shadow-theme" />
    ),
  },
  {
    title: "Wordpress Development",
    description: "Get professional looking website built with wordpress",
    icon: (
      <MailIcon className="w-7 h-7 md:w-[4vw] md:h-[4vw] mb-[.75vw] md:text-theme stroke-[.12rem] md:md:stroke-[.1vw] drop-shadow-sm shadow-theme" />
    ),
  },
  {
    title: "Portfolio Design",
    description: "Attract High Paying Clients for your service with a great portfolio",
    icon: (
      <UserCircleIcon className="w-7 h-7 md:w-[4vw] md:h-[4vw] mb-[.75vw] md:text-theme stroke-[.12rem] md:md:stroke-[.1vw] drop-shadow-sm shadow-theme" />
    ),
  },
  {
    title: "Figma To HTML",
    description: "Get pixel-perfect website from any design reference ",
    icon: (
      <PhotographIcon className="w-7 h-7 md:w-[4vw] md:h-[4vw] mb-[.75vw] md:text-theme stroke-[.12rem] md:md:stroke-[.1vw] drop-shadow-sm shadow-theme" />
    ),
  },
];

function service({ index }) {
  const service = serviceList.filter((n, key) => key == index)[0];
  return (
    <>
      <div
        className="hidden md:flex px-[2.5vw] m-4 flex-col w-[23.1vw] h-[19vw] bg-white z-[100] justify-center
       items-center rounded-sm"
        data-aos="zoom-in-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        {service.icon}
        <div className="text-[1.75vw] mt-[.5vw] mb-[1vw] font-semibold">
          {service.title}
        </div>
        <div className="w-100 text-center text-gray-600 text-[1.1vw]">
          {service.description}
        </div>
      </div>
      <div
        className="md:hidden flex items-center service w-full mb-3 text-xl text-white 
        border-2 border-theme bg-[rgba(0,0,0,.2)] p-4 cursor-pointer rounded-md"
        style={{ backdropFilter: "blur(4px)" }}
        data-aos="zoom-in-right"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="mr-2">{service.icon}</div>
        <div>{service.title}</div>
      </div>
    </>
  );
}

export default service;
