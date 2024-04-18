import React from "react";
import BlogHead from "./BlogHead";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ title, image, className }) {
  return (
    <Link
      href={title?.toLowerCase().replaceAll(" ", "-")}
      className={className}
    >
      <BlogHead title={title} />
      <div className="relative overflow-hidden w-full h-[60vh] mt-8">
        <Image
          src={image}
          alt="Background Image"
          priority={true}
          fill={true}
          loading="eager"
          className="-z-10 w-full h-full object-cover absolute top-0"
        />
      </div>
      <p className="mt-3">
        More off this less hello salamander lied porpoise much over tightly
        circa horse taped so innocuously outside crud mightily rigorous negative
        one inside gorilla and drew humbly shot tortoise inside opaquely. Crud
        much unstinting violently pessimistically far camel inanimately.
      </p>
      <p className="mt-3">
        Coquettish darn pernicious foresaw therefore much amongst lingeringly
        shed much due antagonistically alongside so then more and about turgid
        wrote so stunningly this that much slew.
      </p>
      <Button className="mt-6">Read More</Button>
    </Link>
  );
}
