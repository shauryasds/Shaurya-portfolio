"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient.tsx";
import Image from "next/image";

interface BackgroundGradientDemoProps {
  name: string;
  data: string;
  icon: React.ReactNode; 
}

export function BackgroundGradientDemo({ name, data, icon }: BackgroundGradientDemoProps) {
  return (
    <div>
      <div className="text-4xl mb-2">{icon}</div>
          
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="flex flex-col items-center">
          
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {name}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {data}
          </p>
        </div>
      </BackgroundGradient>
    </div>
  );
}