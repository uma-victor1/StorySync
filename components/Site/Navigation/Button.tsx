"use client";

import useNavStore from "@/state/useNavStore";
import { CloseCircle, HambergerMenu } from "iconsax-react";
import { useState } from "react";

const NavButton: React.FC = () => {
  const { navState, setNav } = useNavStore();
  const handleNavToggle = () => {
    setNav({ isNavOpen: !navState.isNavOpen });
  };
  return (
    <button onClick={handleNavToggle} className="z-20 px-2 lg:hidden">
      {navState.isNavOpen ? (
        <CloseCircle size="24" className="text-slate-600" />
      ) : (
        <HambergerMenu size="24" className="text-slate-600" />
      )}
    </button>
  );
};

export default NavButton;
