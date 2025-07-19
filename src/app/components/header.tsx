import HeaderImage from "@/assets/images/illustrations/rose.png";
import Image from "next/image";
import Separator from "./separator";
import { MenuIcon } from "lucide-react";

const HeaderSection = () => {
  return (
    <>
      <header className="w-full p-4 h-auto flex items-center justify-between">
        <div className=" lg:flex items-center justify-center  text-[#d9c7a6]">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-[applewood] px-2 py-3 bg-black">
              Special
            </p>
            <p className="text-2xl font-[applewood]  text-black p-1 lg:p-2.5 border-b-[6px] border-black">
              Edition
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 font-[CloisterBlack]">
          <h1 className="text-4xl lg:text-8xl">Personal</h1>
          <Image
            className="max-w-[150px] max-h-[130px] object-cover object-center"
            src={HeaderImage}
            alt="Header Image"
          />
          <h1 className="text-4xl lg:text-8xl">Portfolio</h1>
        </div>
        <div className="flex items-center justify-center gap-4 change-cursor ">
          <MenuIcon size={48} />
        </div>
      </header>
      <Separator height={1} width={100} color="black" />
      <Separator height={10} width={100} color="black" verticalSpacing={4} />
    </>
  );
};

export default HeaderSection;
