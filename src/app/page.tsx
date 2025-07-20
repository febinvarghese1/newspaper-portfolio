'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Image from "next/image";
import HomePage from "./components/home-page";
import BackgroundImage from "@/assets/images/background-new.png";
import Loader from "./components/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <main
      className="w-screen overflow-x-hidden h-screen bg-cover bg-center bg-no-repeat bg-[#ddc199] flex justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${BackgroundImage.src})`
      }}
    >
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <HomePage key="homepage" />
        )}
      </AnimatePresence>
    </main>
  );
}
