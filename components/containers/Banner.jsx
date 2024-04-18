import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import { Badge } from "../ui/badge";

export default function Banner() {
  return (
    <FullContainer className="h-[60vh] hover:opacity-95 transition-all cursor-pointer overflow-hidden p-10 bg-black/30 text-white text-center">
      <Image
        src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/01/blog-list-img-5.jpg"
        alt="Background Image"
        priority={true}
        fill={true}
        loading="eager"
        className="-z-10 w-full h-full object-cover absolute top-0"
      />
      <Container className="gap-5">
        <Badge>Fashion</Badge>
        <h1 className="font-extrabold text-5xl">New Fashion Trends</h1>
        <div className="flex items-center justify-center gap-2">
          <p>BY SHANE DOE</p>
          <p>MAY 14, 2016</p>
        </div>
      </Container>
    </FullContainer>
  );
}
