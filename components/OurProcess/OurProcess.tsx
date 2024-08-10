import React from "react";
import SectionHeaders from "../SectionHeaders";
import Cards from "./Cards";

const OurProcess = () => {
  const cardInfo = [
    {
      title: "Copywriting",
      img: "/images/img1.png",
      bulletPoints: [
        "Define your brand: voice and captivate your audience through meticulously crafted copy that tells your unique story.",
        "Iteratively refine your copy, ensuring clarity, impact, and resonance with your target audience.",
      ],
    },
    {
      title: "Design",
      img: "/images/img2.png",
      bulletPoints: [
        "Define your brand: voice and captivate your audience through meticulously crafted copy that tells your unique story.",
        "Iteratively refine your copy, ensuring clarity, impact, and resonance with your target audience.",
      ],
    },
    {
      title: "Develop",
      img: "/images/img3.png",
      bulletPoints: [
        "Define your brand: voice and captivate your audience through meticulously crafted copy that tells your unique story.",
        "Iteratively refine your copy, ensuring clarity, impact, and resonance with your target audience.",
      ],
    },
  ];
  return (
    <section className="wrapper__sm lg:wrapper__md 2xl:wrapper__lg mt-16 flex flex-col gap-16 md:gap-24">
      <SectionHeaders
        title="Our Strategic Creative Process"
        subtitle="Innovative, precise, and collaborative—transforming concepts into success stories."
      />
      {/* cards */}
      <div className="grid grid-cols-1 gap-5 rounded-lg  text-gray-500 md:grid-cols-5 md:grid-rows-4">
        <div className="justfiy-center p col-span-3 row-span-2 items-end rounded-lg bg-gradient-to-l from-purple-50 to-purple-200 px-4 py-4 md:px-12">
          <h2 className="mg:text-3xl mt-8 text-2xl text-gray-900 lg:text-3xl">
            Copywriting
          </h2>
          <p className="mt-4">
            Define your brand: voice and captivate your audience through
            meticulously crafted copy that tells your unique story.
          </p>
        </div>
        <div className="col-span-3 row-span-2 rounded-lg bg-gradient-to-l from-purple-50 to-purple-200  px-4 md:col-span-2">
          <div className="p-4 text-7xl "></div>
          <div className="mt-40 flex flex-col items-start align-bottom">
            <h1 className="text-2xl text-gray-900">Fast Development Speed</h1>
            <span className="mb-2 text-gray-600">faster coding</span>
          </div>
        </div>
        <div className="bg-darkblue col-span-3 row-span-2 rounded-lg bg-gradient-to-l from-purple-50 to-purple-200 px-4 py-4 md:col-span-2 md:px-8">
          <div className="mt-12 flex flex-row items-center justify-center space-x-6 text-xl"></div>
          <div>
            <h1 className="mt-20 text-2xl text-gray-900">
              Fast Design Development and iteration speed
            </h1>
          </div>
        </div>
        <div className="relative col-span-3 row-span-2 rounded-lg bg-gradient-to-r  from-purple-50 to-purple-200 px-4 py-4 pt-8 md:px-12 ">
          <h1 className="text-2xl text-gray-900 md:text-3xl">
            We create content that resonates with your audience
          </h1>
          <div className="absolute bottom-12 right-2 text-9xl "></div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
