"use client";

import React from "react";
import Button from "../../Button";
import Link from "next/link";
import useNavStore from "@/state/useNavStore";

const SiteNav = () => {
  const links = [
    { name: "About Us", href: "/about" },
    { name: "Join our Team", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Newsletter", href: "#" },
    { name: "Learn More", href: "#", type: "button" },
  ];
  const { navState, setNav } = useNavStore();

  return (
    <nav
      className={`site-nav fixed left-0 top-0 h-screen w-screen bg-white lg:static lg:h-fit lg:w-fit lg:bg-transparent ${navState.isNavOpen ? "pointer-events-auto visible opacity-100" : "max-lg:pointer-events-none max-lg:invisible max-lg:opacity-0"}`}
    >
      <div className=" h-full w-full">
        <ul className="flex h-full flex-col items-center justify-center gap-6 text-3xl text-slate-800 lg:flex-row lg:text-base lg:font-medium">
          {links.map((link, index) => {
            return (
              <li
                onClick={() =>
                  setNav({
                    isNavOpen: false,
                  })
                }
                key={index}
                className="cursor-pointer"
              >
                {link.type === "button" ? (
                  <Button text={link.name} color="purple" />
                ) : (
                  <Link href={link.href}>{link.name}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default SiteNav;
