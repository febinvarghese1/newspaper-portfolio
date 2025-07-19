import { year } from "../helper/dates";
import Separator from "./separator";

const FooterSection = () => {
  return (
    <footer className="w-full border-t-4 border-black font-[lucian] mt-12">
      <Separator height={5} width={100} color="black" verticalSpacing={2} />
      <Separator height={1} width={100} color="black" />
      <div className="px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Ad Style Block */}
        <div className="border-2 border-black border-dashed p-4 flex flex-col items-center ">
          <span className="text-2xl font-[CloisterBlack] mb-2">
            Published by
          </span>
          <span className="text-7xl font-[lucian] mb-1">Febin Varghese</span>
          <span className="text-lg font-[clarendon] text-[#666]">
            {`Your Neighbourhood Developer`}
          </span>
        </div>
        {/* Center Copyright & Divider */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-1 bg-black mb-2" />
          <span className="text-3xl font-[CloisterBlack] tracking-widest mb-2">
            © {year} Newspaper Portfolio
          </span>
          <span className="text-sm font-[clarendon] text-[#666]">
            All rights reserved. Printed in India.
          </span>
          <div className="w-full h-1 bg-black mt-2" />
        </div>
        {/* Right Ad Style Block */}
        <div
          className="border-[6px]  text-black border-black p-4 flex flex-col items-center"
          style={{
            boxShadow: "4px 4px 1px 0 rgba(0, 0, 0, 1)"
          }}
        >
          <span className="text-4xl font-[lucian] mb-1">Contact</span>
          <span className="text-2xl font-[clarendon] text-black">
            febv183@gmail.com
          </span>
          <span className="mt-2 text-xl font-[clarendon] text-black border border-black px-2 py-1 ">
            For inquiries: Response within 24 hours
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center my-6">
        <span className="text-md font-[clarendon] p-3 text-[#000]  border border-black rounded-full">
          This site is a personal project and not a real publication.
        </span>
      </div>
      <Separator height={1} width={100} color="black" verticalSpacing={2} />
    </footer>
  );
};

export default FooterSection;
