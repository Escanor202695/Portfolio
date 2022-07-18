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
     bg-gradient-to-tr to-[#62ddd7] from-[#111414]"
    >
      <div className="absolute h-full w-full top-0 left-0 z-[1000]">
        <Img src="/contactbg.png" classes="relative w-full h-full" />
      </div>
      <div className="w-[100vw] h-full absolute left-0 top-0 bg-gradient-to-r from-[rgba(0,0,0,.9)] to-[rgba(0,0,0,.4)]"></div>
      <div className="flex justify-between w-full">
        <div>
          <div
            className="title relative text-4xl font-semibold align-center mb-[2rem] md:mb-[3vw]"
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
            <div className="flex space-x-2 md:space-x-4 mb-2">
              <MailIcon className="w-6 h-6" />
              <div>sakibchow202695@gmail.com</div>
            </div>
            <div className="flex space-x-2 md:space-x-4 mb-2">
              <WhatsAppIcon />
              <div>+8801517310359</div>
            </div>
            <div className="flex space-x-2 md:space-x-4  mb-2">
              <TelegramIcon />
              <div>+8801517310359</div>
            </div>
            <div className="flex space-x-2 md:space-x-4 ">
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
        <div className="md:flex flex-col flex-1 justify-center items-end hidden z-[100]">

          <div style={{fontFamily:'signature'}} className="text-white text-[5vw]">Sakib Chowdhury</div>
          <div className="mr-4 text-[#bae8be]">Frontend Developer & UX/UI designer</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
