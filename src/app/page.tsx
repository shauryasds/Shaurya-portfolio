"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { Cover } from "@/components/ui/cover";
import { cn } from "@/lib/utils";
import ProjectsPage from "./projects/page";
import Skills from "./skills/page";
import ContactPage from "./contact/page";
import AboutPage from "./about/page";
// import {  useState } from 'react';
export default function BackgroundBoxesDemo() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer); 
  // }, []);

  return (
    <>
    <div className="min-h-[100vh] relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
    
      <Boxes />
      <h1
        className={cn(
          "md:text-5xl text-3xl text-white text-center font-bold tracking-wide relative z-20"
        )}
      >
        SHAURYA DEEP SHUKLA
      </h1>
      <p className="mt-6 text-center mt-2 text-neutral-300 text-lg relative z-20">
      <Cover >FULL STACK WEB DEVELOPER</Cover>
      </p>

    
    </div>
    <ProjectsPage/>
    <Skills/>
    <ContactPage/>
    <AboutPage/>
    </>
  );
}
