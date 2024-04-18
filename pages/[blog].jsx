import React from "react";
import { blogs } from "@/components/blogs";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import Banner from "@/components/containers/Banner";
import MostPopular from "@/components/containers/MostPopular";
import Navbar from "@/components/containers/Navbar";
import Rightbar from "@/components/containers/Rightbar";
import { useRouter } from "next/router";
import { Montserrat } from "next/font/google";
import Footer from "@/components/containers/Footer";

const myFont = Montserrat({ subsets: ["cyrillic"] });

export default function Blog() {
  const router = useRouter();
  const { blog } = router.query;

  const myBlog = blogs.find(
    (item) => item.title.toLowerCase().replaceAll(" ", "-") === blog
  );

  return (
    <div className={myFont.className}>
      <Navbar />
      <Banner title={myBlog?.title} image={myBlog?.image} />
      <FullContainer>
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-home gap-14 w-full">
            <div>
              <p>
                More off this less hello salamander lied porpoise much over
                tightly circa horse taped so innocuously outside crud mightily
                rigorous negative one inside gorilla and drew humbly shot
                tortoise inside opaquely. Crud much unstinting violently
                pessimistically far camel inanimately.
              </p>
              <p className="mt-4">
                Coquettish darn pernicious foresaw therefore much amongst
                lingeringly shed much due antagonistically alongside so then
                more and about turgid wrote so stunningly this that much slew.
              </p>
              <p className="mt-4">
                More off this less hello salamander lied porpoise much over
                tightly circa horse taped so innocuously outside crud mightily
                rigorous negative one inside gorilla and drew humbly shot
                tortoise inside opaquely. Crud much unstinting violently
                pessimistically far camel inanimately then more and about.
              </p>
              <p>
                More off this less hello salamander lied porpoise much over
                tightly circa horse taped so innocuously outside crud mightily
                rigorous negative one inside gorilla and drew humbly shot
                tortoise inside opaquely. Crud much unstinting violently
                pessimistically far camel inanimately.
              </p>
              <p className="mt-4">
                Coquettish darn pernicious foresaw therefore much amongst
                lingeringly shed much due antagonistically alongside so then
                more and about turgid wrote so stunningly this that much slew.
              </p>
              <p className="mt-4">
                More off this less hello salamander lied porpoise much over
                tightly circa horse taped so innocuously outside crud mightily
                rigorous negative one inside gorilla and drew humbly shot
                tortoise inside opaquely. Crud much unstinting violently
                pessimistically far camel inanimately then more and about.
              </p>
              <p>
                More off this less hello salamander lied porpoise much over
                tightly circa horse taped so innocuously outside crud mightily
                rigorous negative one inside gorilla and drew humbly shot
                tortoise inside opaquely. Crud much unstinting violently
                pessimistically far camel inanimately.
              </p>
              <p className="mt-4">
                Coquettish darn pernicious foresaw therefore much amongst
                lingeringly shed much due antagonistically alongside so then
                more and about turgid wrote so stunningly this that much slew.
              </p>
              <p className="mt-4">
                More off this less hello salamander lied porpoise much over
                tightly circa horse taped so innocuously outside crud mightily
                rigorous negative one inside gorilla and drew humbly shot
                tortoise inside opaquely. Crud much unstinting violently
                pessimistically far camel inanimately then more and about.
              </p>
              <p>
                More off this less hello salamander lied porpoise much over
                tightly circa horse taped so innocuously outside crud mightily
                rigorous negative one inside gorilla and drew humbly shot
                tortoise inside opaquely. Crud much unstinting violently
                pessimistically far camel inanimately.
              </p>
              <p className="mt-4">
                Coquettish darn pernicious foresaw therefore much amongst
                lingeringly shed much due antagonistically alongside so then
                more and about turgid wrote so stunningly this that much slew.
              </p>
              <p className="mt-4">
                More off this less hello salamander lied porpoise much over
                tightly circa horse taped so innocuously outside crud mightily
                rigorous negative one inside gorilla and drew humbly shot
                tortoise inside opaquely. Crud much unstinting violently
                pessimistically far camel inanimately then more and about.
              </p>
            </div>
            <Rightbar />
          </div>
        </Container>
      </FullContainer>
      <MostPopular />
      <Footer />
    </div>
  );
}
