import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import Banner from "@/components/containers/Banner";
import MostPopular from "@/components/containers/MostPopular";
import Navbar from "@/components/containers/Navbar";
import Footer from "@/components/containers/Footer";
import Blog from "@/components/common/Blog";
import { blogs } from "@/components/blogs";
import Rightbar from "@/components/containers/Rightbar";
import { Montserrat } from "next/font/google";

const myFont = Montserrat({ subsets: ["cyrillic"] });

export default function Home() {
  return (
    <div className={myFont.className}>
      <Navbar />
      <Banner />
      <FullContainer>
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-home gap-14 w-full">
            <div className="flex flex-col gap-20">
              {blogs.map((item, index) => (
                <Blog key={index} title={item.title} image={item.image} />
              ))}
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
