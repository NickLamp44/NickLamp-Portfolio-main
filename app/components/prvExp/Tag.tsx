import React from "react";

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p className="uppercase whitespace-nowrap bg-gradient-to-r from-[#6f2dbd] to-[#a663cc] px-2 py-[6px] md:py-[6px] md:px-3 rounded-[4px] font-medium md:font-bold text-base lg:text-lg">
      {children}
    </p>
  );
}
