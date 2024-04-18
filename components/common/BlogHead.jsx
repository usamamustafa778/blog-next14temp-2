import React from "react";

export default function BlogHead({ title }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="italic text-xs w-fit text-center text-gray-400">
        in
        <span className="uppercase text-yellow-600 font-medium ml-2 text-xs">
          Lifestyle
        </span>
      </p>
      <h2 className="text-center md:text-left font-extrabold text-3xl">
        {title}
      </h2>
      <p className="text-xs uppercase">
        <span className="text-gray-400 text-xs">MAY 15, 2016</span> - 3 COMMENTS
      </p>
    </div>
  );
}
