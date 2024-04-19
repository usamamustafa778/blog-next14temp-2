import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import Banner from "@/components/containers/Banner";
import MostPopular from "@/components/containers/MostPopular";
import Navbar from "@/components/containers/Navbar";
import Footer from "@/components/containers/Footer";
import Blog from "@/components/common/Blog";
import { blogs } from "@/components/blogs";
import Rightbar from "@/components/containers/Rightbar";
import Head from "next/head";
import { Montserrat } from "next/font/google";

const myFont = Montserrat({ subsets: ["cyrillic"] });

export default function Home({ logo, banner }) {
  // http://localhost:3112/images/industry_template_images/65f031b9d1d7559cda393629/1710763764370-kpqe5g.jpeg
  // setBannerImage(
  //   `https://apisitem.ecommcube.com/images/industry_template_images/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/${file}`
  // );
  console.log("banner", banner.value);

  return (
    <div className={myFont.className}>
      <Head>
        <title>Next 14 Template</title>
      </Head>
      <Navbar logo={logo} />
      <Banner
        badge={banner.value.badge}
        title={banner.value.title}
        tagline={banner.value.tagline}
        image={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/industry_template_images/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/${banner?.file_name}`}
      />
      <FullContainer>
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-home gap-12 lg:gap-14 w-full">
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

export async function getStaticProps() {
  const _logo = await fetch(
    `${
      process.env.NEXT_PUBLIC_SITE_MANAGER
    }/api/public/industry_template_data/${
      process.env.NEXT_PUBLIC_INDUSTRY_ID
    }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${"logo"}`
  );
  const logo = await _logo.json();

  const _banner = await fetch(
    `${
      process.env.NEXT_PUBLIC_SITE_MANAGER
    }/api/public/industry_template_data/${
      process.env.NEXT_PUBLIC_INDUSTRY_ID
    }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${"banner"}`
  );
  const banner = await _banner.json();

  return {
    props: {
      logo: logo.data[0],
      banner: banner.data[0],
    },
  };
}
