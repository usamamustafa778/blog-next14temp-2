import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Cormorant } from "next/font/google";
import { cn } from "@/lib/utils";

const myFont = Cormorant({ subsets: ["cyrillic"] });

export default function Banner({ title, image }) {
  return (
    <FullContainer className="h-[60vh] overflow-hidden p-10 bg-black/20 text-white text-center">
      <Image
        src={
          image ||
          "https://zoya.qodeinteractive.com/wp-content/uploads/2021/01/blog-list-img-5.jpg"
        }
        alt="Background Image"
        priority={true}
        fill={true}
        loading="eager"
        className="-z-10 w-full h-full object-cover absolute top-0"
      />
      <Container className="gap-6">
        <Badge>Fashion</Badge>
        <h1
          className={cn(
            "font-extrabold text-7xl capitalize max-w-screen-md",
            myFont.className
          )}
        >
          {title || "New Fashion Trends"}
        </h1>
        <div className="flex items-center justify-center gap-2">
          <p>BY SHANE DOE</p>
          <p>MAY 14, 2016</p>
        </div>
      </Container>
    </FullContainer>
  );
}
