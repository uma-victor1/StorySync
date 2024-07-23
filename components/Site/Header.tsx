import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/Site/Navigation";
import Button from "@/components/Button";
import { CloseCircle } from "iconsax-react";
import NavButton from "@/components/Site/Navigation/Button";

const SiteLogo: React.FC = () => {
  return (
    <Link href="/">
      <figure className="site-logo">
        <Image src={"/logo.png"} alt="logo" width={147} height={32} />
      </figure>
    </Link>
  );
};
const SiteHeader: React.FC = () => {
  return (
    <header className="site-header fixed top-0 z-30 w-full p-6">
      <div className=" mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border-2 border-slate-100/20 bg-slate-50 bg-clip-padding p-3 lg:bg-slate-100/70 lg:backdrop-blur-md ">
        <SiteLogo />
        <SiteNav />
        {/* nav button */}
        <NavButton />
      </div>
    </header>
  );
};

export default SiteHeader;
