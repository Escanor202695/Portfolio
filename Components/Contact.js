import React from "react";
import { MailIcon } from "@heroicons/react/outline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Img from "../Components/reusable/Img";

function Contact(props) {
  return (
    <div
      className="contacts relative w-100 py-16 px-16 md:px-[10vw] md:py-[6vw] text-white flex flex-col justify-center items-start
     bg-gradient-to-tr to-[#62ddd7] from-[#111414] z-10"
    >
      <div className="absolute h-full w-full top-0 left-0">
        <Img src="/contactbg.webp" classes="relative w-full h-full" />
      </div>
      <div className="w-[100vw] h-full absolute left-0 top-0 bg-gradient-to-r from-[rgba(0,0,0,.9)] to-[rgba(0,0,0,.4)] -z-10"></div>
      <div className="flex justify-between w-full">
        <div>
          <div
            className="title  w-[8rem] md:w-[9vw] relative text-4xl font-semibold align-center mb-[2rem] md:mb-[3vw]"
            data-aos="zoom-in-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            Contacts
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-delay="500"
            data-aos-duration="750"
            data-aos-once="true"
          >
            <div className="flex space-x-2 md:space-x-4 mb-2">
              <MailIcon className="w-6 h-6" />
              <div>sakibchow202695@gmail.com</div>
            </div>
            <div className="flex space-x-2 md:space-x-4 mb-2">
              <WhatsAppIcon />
              <div>+8801517310359</div>
            </div>
            <div className="flex space-x-2 md:space-x-4 z-[1000]">
              <LinkedInIcon />
              <a
                href="http://linkedin.com/in/sakib-chowdhury-363531138"
                className="cursor-pointer"
              >
                Sakib Chowdhury
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex flex-col flex-1 justify-center items-end hidden z-[1000]">
          <div
            style={{ fontFamily: "signature" }}
            className="text-white text-[5vw]"
            data-aos="zoom-in-left"
            data-aos-duration="750"
            data-aos-once="true"
          >
            Sakib Chowdhury
          </div>
          <div
            className="mr-4 text-white"
            data-aos="zoom-in-left"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="500"
          >
            Fullstack Developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
