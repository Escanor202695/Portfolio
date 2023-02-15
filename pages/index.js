import AOS from "aos";
import Head from "next/head";
import React, { useEffect } from "react";
import Work from "../Components/Work";
import Intro from "../Components/Intro";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Services from "../Components/Services";
import Reviews from "../Components/Reviews";
import Contact from "../Components/Contact";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Sakib Chowdhury</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="main">
        <Intro />
        <About />
        <Skills/>
        <Work />
        <Services/>
        <Reviews/>
        <Contact/>
      </main>
    </div>
  );
}
