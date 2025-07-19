import Image from "next/image";
import HomePage from "./components/home-page";
import BackgroundImage from "@/assets/images/background-new.png";

export default function Home() {
  return (
    <main
      className="w-screen overflow-x-hidden h-screen bg-cover bg-center bg-no-repeat bg-[#ddc199] flex  justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${BackgroundImage.src})`
      }}
    >
      <HomePage />
    </main>
  );
}
