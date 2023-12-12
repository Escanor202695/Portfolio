import AOS from "aos";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Work from "../Components/Work";
import Intro from "../Components/Intro";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Services from "../Components/Services";
import Reviews from "../Components/Reviews";
import Contact from "../Components/Contact";
import Clients from "../Components/Clients";
import LoadingScreen from "../Components/loadingScreen"; // Import your loading screen component
import "aos/dist/aos.css";

export default function Home() {
  const [loading, setLoading] = useState("block");

  useEffect(() => {
    const initializeAOS = async () => {
      // Simulate a 1-second loading delay
      setTimeout(async () => {
        await AOS.init();
        setLoading("none");
      }, 2000);
    };

    initializeAOS();
  }, []);

  return (
    <div className={`overflow-hidden ${loading ? "loading" : ""}`}>
      <Head>
        <title>Sakib Chowdhury</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ display: loading }}>
        <LoadingScreen />
      </div>

      <main className="main">
        <Intro />
        <Clients />
        <About />
        <Skills />
        <Work />
        <Services />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}
