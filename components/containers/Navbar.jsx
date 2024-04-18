import React from "react";
import FullContainer from "../common/FullContainer";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Search, Twitter } from "lucide-react";

export default function Navbar({ menu_list }) {
  return (
    <FullContainer className="bg-white shadow">
      <div className="hidden md:flex items-center  justify-center py-4 gap-6 w-full border-b border-gray-100">
        <Link href={`/${"home"}`} className="uppercase text-sm">
          home
        </Link>
        <Link href={`/${"about"}`} className="uppercase text-sm">
          About
        </Link>
        <Link href={`/${"contact"}`} className="uppercase text-sm">
          contact
        </Link>
        <Link href={`/${"blogs"}`} className="uppercase text-sm">
          blogs
        </Link>
      </div>
      <div className="flex items-center justify-between w-10/12 py-10">
        <div className="flex items-center gap-3 uppercase">
          <Search className="w-5" />
          <p>Search</p>
        </div>
        <Link href="/">
          <Image
            height={50}
            width={170}
            src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/logo-main-img-01.png"
            alt="logo"
            className="w-40 md:w-auto"
          />
        </Link>
        <div className="flex items-center justify-end gap-3 text-gray-500">
          <Facebook className="w-5" />
          <Twitter className="w-5" />
          <Instagram className="w-5" />
        </div>
      </div>
    </FullContainer>
  );
}
