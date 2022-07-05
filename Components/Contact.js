import React from "react";
import { MailIcon } from "@heroicons/react/outline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact(props) {
  return (
    <div className="w-100 py-16 px-16 bg-black text-white flex flex-col justify-center items-start">
      <div
        className="title relative text-4xl font-semibold align-center mb-[2rem] md:mb-20"
        data-aos="zoom-in-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        Contact
      </div>
      <div
        data-aos="zoom-in-right"
        data-aos-delay="500"
        data-aos-duration="750"
        data-aos-once="true"
      >
        <div className="flex space-x-2 mb-2">
          <MailIcon className="w-6 h-6" />
          <div>sakibchow202695@gmail.com</div>
        </div>
        <div className="flex space-x-1 mb-2">
          <WhatsAppIcon />
          <div>+8801517310359</div>
        </div>
        <div className="flex space-x-1 mb-2">
          <TelegramIcon />
          <div>+8801517310359</div>
        </div>
        <div className="flex space-x-1">
          <LinkedInIcon />
          <div className="cursor-pointer">
            {" "}
            <a href="http://linkedin.com/in/sakib-chowdhury-363531138">
              Sakib Chowdhury{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
