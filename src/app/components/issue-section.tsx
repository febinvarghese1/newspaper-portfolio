import React from "react";
import Separator from "@/app/components/separator";
import { getCurrentDate } from "../helper/dates";

const IssueSection = () => {

  return (
    <section className="w-full flex flex-col gap-1 sm:gap-2">
      <Separator height={1} width={100} color="black" />
      <div className="flex items-center justify-between text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-[applewood]">
        <p className="border-r-2 sm:border-r-4 flex-1 border-black pr-2 sm:pr-4 text-center">Chennai, TN</p>
        <p className="flex-1 text-center">{getCurrentDate()}</p>
        <p className="border-l-2 sm:border-l-4 flex-1 border-black pl-2 sm:pl-4 text-center">Vol. 388</p>
      </div>
      <Separator height={3} width={100} color="black" />
    </section>
  );
};

export default IssueSection;
