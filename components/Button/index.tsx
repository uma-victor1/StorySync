import React, { ReactElement } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color: "purple" | "yellow" | "ghost";
  hasIcon?: boolean;
  icon?: ReactElement;
  isFlexInv?: boolean;
  className?: string;
}

const Button = ({
  text,
  onClick,
  color,
  hasIcon,
  icon,
  isFlexInv,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center ${props.className} ${
        isFlexInv && "flex-row-reverse"
      } cursor-pointer justify-center gap-2 rounded-full px-4 md:px-6 py-2 md:py-4 text-sm md:text-base font-medium capitalize ${
        color === "purple"
          ? "bg-halo-purple"
          : color === "yellow"
            ? "bg-halo-yellow"
            : "border border-slate-200 bg-slate-50 bg-transparent"
      }`}
    >
      {hasIcon && icon}
      <span
        className={`
            ${
              color === "purple"
                ? "bg-halo-white bg-clip-text text-transparent"
                : color === "yellow"
                  ? "bg-halo-yellow-text bg-clip-text text-transparent"
                  : "text-slate-800"
            }
        `}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
