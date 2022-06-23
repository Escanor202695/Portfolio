import AOS from "aos";
import Head from "next/head";
import React, { useEffect } from "react";
import Work from "../Components/Work";
import Intro from "../Components/Intro";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Head>
        <title>AirBnb Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/airbnb.png" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Head>

      <main className="main">
        <Intro />
        <Work/>
      </main>
    </div>
  );
}
