import { useView } from "@/contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

const curYear = new Date().getFullYear();

export default function Footer() {
  const { setSectionInView } = useView();

  return (
    <section
      id="footer"
      className="flex flex-col items-center justify-center gap-4 py-8 text-center"
    >
      <p>
        <span className="text-xl sm:text-2xl">&copy;</span> {curYear} . NICK
        LAMPARELLI ALL RIGHTS RESERVED
      </p>
      <Link
        className="flex flex-col items-center gap-2"
        href="#home"
        data-blobity-offset-x="2"
        data-blobity-offset-y="0"
        onClick={() => setSectionInView("home")}
      >
        <Icon icon="mdi:arrow-top" className="text-2xl rounded-2xlt" />
        <p className="underline leading-tight">SCROLL TO TOP</p>
      </Link>
    </section>
  );
}
