import FindKeyword from "@/components/FindKeyword/FindKeyword";
import JoinCommunity from "@/components/JoinCommunity/JoinCommunity";
import Landing from "@/components/Landing";
import OurProcess from "@/components/OurProcess/OurProcess";
import OurUsers from "@/components/OurUsers/OurUsers";
import Readers from "@/components/Readers/Readers";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col gap-8 pb-0 pt-6">
      <Landing />
      <Services />
      <OurUsers />
      <OurProcess />
      <JoinCommunity />
      <FindKeyword />
      <Testimonials />
      <Readers />
      <Contact />
    </main>
  );
}
