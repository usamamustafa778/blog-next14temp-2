import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";

export default function MostPopular() {
  return (
    <FullContainer className="py-16 text-center">
      <Container className="border p-7">
        <h2 className="font-bold text-xl -mt-11 bg-white px-6">Most Popular</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full mt-10 mb-3">
          {/* b1 */}
          <div>
            <div className="relative overflow-hidden w-full h-52">
              <Image
                src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/anthony-delanoix-226168-1-1536x1024.jpg"
                alt="Background Image"
                priority={true}
                fill={true}
                loading="eager"
                className="-z-10 w-full h-full object-cover absolute top-0"
              />
            </div>
            <h3 className="font-bold mt-3 leading-5">
              Mountain Snow Isn’t Holding Me Back This Time
            </h3>
          </div>

          {/* b2 */}
          <div>
            <div className="relative overflow-hidden w-full h-52">
              <Image
                src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/MKF_5387-2048x1367.jpg"
                alt="Background Image"
                priority={true}
                fill={true}
                loading="eager"
                className="-z-10 w-full h-full object-cover absolute top-0"
              />
            </div>
            <h3 className="font-bold mt-3 leading-5">
              A Serene Place For Deep Thinkers
            </h3>
          </div>

          {/* b3 */}
          <div>
            <div className="relative overflow-hidden w-full h-52">
              <Image
                src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/interiejer_12-2048x1365.jpg"
                alt="Background Image"
                priority={true}
                fill={true}
                loading="eager"
                className="-z-10 w-full h-full object-cover absolute top-0"
              />
            </div>
            <h3 className="font-bold mt-3 leading-5">
              My Very Minimal Interior Design Ideas
            </h3>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
