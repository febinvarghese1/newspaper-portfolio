import { year } from "../helper/dates";
import Separator from "./separator";

const FooterSection = () => {
  return (
    <footer className="w-full border-t-2 sm:border-t-4 border-black font-[lucian] mt-6 sm:mt-8 lg:mt-12">
      <Separator height={5} width={100} color="black" verticalSpacing={2} />
      <Separator height={1} width={100} color="black" />
      <div className="px-2 sm:px-4 py-4 sm:py-6 lg:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Ad Style Block */}
        <div className="border-2 border-black border-dashed p-3 sm:p-4 flex flex-col items-center">
          <span className="text-lg sm:text-xl lg:text-2xl font-[CloisterBlack] mb-2">
            Published by
          </span>
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[lucian] mb-1">Febin Varghese</span>
          <span className="text-sm sm:text-base lg:text-lg font-[clarendon] text-[#666]">
            {`Your Neighbourhood Developer`}
          </span>
        </div>
        {/* Center Copyright & Divider */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-1 bg-black mb-2" />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[CloisterBlack] tracking-widest mb-2 text-center">
            © {year} Newspaper Portfolio
          </span>
          <span className="text-xs sm:text-sm font-[clarendon] text-[#666] text-center">
            All rights reserved. Printed in India.
          </span>
          <div className="w-full h-1 bg-black mt-2" />
        </div>
        {/* Right Ad Style Block */}
        <div
          className="border-2 sm:border-4 lg:border-[6px] text-black border-black p-3 sm:p-4 flex flex-col items-center"
          style={{
            boxShadow: "2px 2px 1px 0 rgba(0, 0, 0, 1)"
          }}
        >
          <span className="text-2xl sm:text-3xl lg:text-4xl font-[lucian] mb-1">Contact</span>
          <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-[clarendon] text-black text-center">
            febv183@gmail.com
          </span>
          <span className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl font-[clarendon] text-black border border-black px-2 py-1 text-center">
            For inquiries: Response within 24 hours
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center my-4 sm:my-6">
        <span className="text-xs sm:text-sm font-[clarendon] p-2 sm:p-3 text-[#000] border border-black rounded-full text-center">
          This site is a personal project and not a real publication.
        </span>
      </div>
      <Separator height={1} width={100} color="black" verticalSpacing={2} />
    </footer>
  );
};

export default FooterSection;
