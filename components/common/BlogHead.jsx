import React from "react";
import { cn } from "@/lib/utils";
import { Cormorant } from "next/font/google";

const myFont = Cormorant({ subsets: ["cyrillic"] });

export default function BlogHead({ title }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="italic text-xs w-fit text-center text-gray-400">
        in
        <span className="uppercase text-yellow-600 font-medium ml-2 text-xs">
          Lifestyle
        </span>
      </p>
      <h2
        className={cn(
          "text-center md:text-left font-bold text-5xl",
          myFont.className
        )}
      >
        {title}
      </h2>
      <p className="text-xs uppercase">
        <span className="text-gray-400 text-xs">MAY 15, 2016</span> - 3 COMMENTS
      </p>
    </div>
  );
}
