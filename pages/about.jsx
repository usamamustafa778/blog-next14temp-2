import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import AboutBanner from "@/components/containers/AboutBanner";
import Footer from "@/components/containers/Footer";
import Navbar from "@/components/containers/Navbar";
import React from "react";
import { Montserrat } from "next/font/google";
import { Cormorant } from "next/font/google";
import { cn } from "@/lib/utils";
import Rightbar from "@/components/containers/Rightbar";
import Head from "next/head";

const myFont = Montserrat({ subsets: ["cyrillic"] });
const font2 = Cormorant({ subsets: ["cyrillic"] });

export default function About({ logo }) {
  return (
    <div className={myFont.className}>
      <Head>
        <title>Next 14 Template</title>
      </Head>
      <Navbar logo={logo} />
      <AboutBanner />
      <FullContainer>
        <Container className="py-16">
          <div className="grid grid-cols-about gap-16 w-full">
            <div className={font2.className}>
              <p
                className={cn(
                  "text-xs uppercase text-yellow-600",
                  myFont.className
                )}
              >
                LIFESTYLE BLOGGER
              </p>
              <h2 className="text-7xl mt-6">Hi, I am Carolyn!</h2>
              <p className="mt-5 text-lg">
                Ex azum san pericula usu an, in pri dolorum denique. Cu movet
                debitis cum. Vix paulo evertitur cu, conceptam constituam te
                his, meis euismod sed ad. Partem suscipit cu cum. Vix no
                prodesset complectitur conclud aturque, dicam perfecto eu per,
                ne vis eleifend expetenda. Idque petentium laboramus mea id, mei
                at.
              </p>
              <p className="mt-5">
                Ex mea oratio evertitur, mediocrem principes no has. Quodsi
                copiosae vel eu. Te rebum diceret gloriatur sea, dolorum
                fabellas vulputate has ex, mea similique posidonium persequeris
                at. Et dicat referrentur usu. Te cum saperet inimicus. Vix paulo
                evertitur cu, conceptam constituam te his, meis euismod sed ad.
                Partem suscipit cu cum. Vix no prodesset complectitur conclud
                aturque, dicam perfecto eu per, ne vis eleifend expetenda. Idque
                petentium laboramus mea id, mei at minim labores tollit enim
                singulis instructior his dicant fabulas.
              </p>
            </div>
            <Rightbar />
          </div>
        </Container>
      </FullContainer>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const _logo = await fetch(
    `${
      process.env.NEXT_PUBLIC_SITE_MANAGER
    }/api/public/industry_template_data/${
      process.env.NEXT_PUBLIC_INDUSTRY_ID
    }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${"logo"}`
  );
  const logo = await _logo.json();

  return {
    props: {
      logo: logo.data[0],
    },
  };
}
