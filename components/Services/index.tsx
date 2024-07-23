import React from "react";
import { SectionHeaders } from "../index";
import ServiceCards from "./ServiceCards";

const Services = () => {
  return (
    <section className="wrapper__sm xl:wrapper__md flex flex-col gap-16 mt-10 md:mt-36">
      <SectionHeaders
        title="Let's Empower Your Story"
        subtitle="Crafting, Clarifying, and Catalyzing with StorySync"
      />
      <ServiceCards/>
    </section>
  );
};

export default Services;
