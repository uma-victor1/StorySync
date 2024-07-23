import React, { ReactElement } from "react";
import { ArrowRight, Chart2, Notepad2, People } from "iconsax-react";
import { Button } from "../index";

const ServiceCards = () => {
  interface CardProps {
    title: string;
    description: string;
    icon: ReactElement;
    buttoncaption: string;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="rounded-3xl flex items-center justify-center text-center px-8 py-10 gap-8 bg-purple-50 flex-col">
        <div className="flex flex-col text-center gap-2 items-center justify-center">
          <Notepad2 variant="Bulk" className="w-14 h-14 text-purple-600" />
          <h3 className="text-3xl font-medium text-purple-800 ">Copywriting</h3>
          <p className="text-[#6B21A8] text-sm">
            Crafting captivating narratives that resonate with your audience.
            Let us amplify your brand&#39;s voice with engaging website copy,
            persuasive product descriptions, and captivating marketing
            materials.
          </p>
        </div>
        <Button
          text="Learn More"
          color="purple"
          hasIcon={true}
          isFlexInv={true}
          icon={<ArrowRight variant="TwoTone" className="w-6 h-6 text-white" />}
        />
      </div>
      <div className="rounded-3xl flex items-center justify-center text-center px-8 py-10 gap-8 bg-yellow-50 flex-col">
        <div className="flex flex-col text-center gap-2 items-center justify-center">
          <People variant="TwoTone" className="w-14 h-14 text-yellow-700" />
          <h3 className="text-3xl font-medium text-yellow-700 ">
            Technical Content
          </h3>
          <p className="text-yellow-800 text-sm">
            Demystifying complex concepts. Our Technical Content services ensure
            your ideas are accessible. From whitepapers to blog posts, trust us
            to translate technical intricacies into engaging content.
          </p>
        </div>
        <Button
          text="Learn More"
          color="yellow"
          hasIcon={true}
          isFlexInv={true}
          icon={
            <ArrowRight variant="TwoTone" className="w-6 h-6 text-amber-700" />
          }
        />
      </div>
      <div className="rounded-3xl flex items-center justify-center text-center px-8 py-10 gap-8 bg-purple-50 flex-col">
        <div className="flex flex-col text-center gap-2 items-center justify-center">
          <Chart2 variant="Bulk" className="w-14 h-14 text-purple-600" />
          <h3 className="text-3xl font-medium text-purple-800 ">
            Growth Content
          </h3>
          <p className="text-[#6B21A8] text-sm">
            Fuel your brand&#39;s expansion. Our Growth Content services drive
            engagement and boost online presence. From SEO-optimized blog posts
            to social media campaigns, we create content designed for growth.
          </p>
        </div>
        <Button
          text="Learn More"
          color="purple"
          hasIcon={true}
          isFlexInv={true}
          icon={<ArrowRight variant="TwoTone" className="w-6 h-6 text-white" />}
        />
      </div>
    </div>
  );
};

export default ServiceCards;
