import React from "react";

interface SectionHeaders {
  title: string;
  subtitle: string;
}
const SectionHeaders = ({ title, subtitle }: SectionHeaders) => {
  return (
    <header className="flex flex-col items-center gap-2">
      <h2 className="font-bold text-2xl text-center md:text-[50px] bg-clip-text text-transparent bg-halo-night leading-normal">
        {title}
      </h2>
      <h4 className=" text-slate-600 text-sm text-center md:text-xl">{subtitle}</h4>
    </header>
  );
};

export default SectionHeaders;
