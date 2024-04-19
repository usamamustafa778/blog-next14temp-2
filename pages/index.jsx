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

export default function Home({ logo }) {
  // http://localhost:3112/images/industry_template_images/65f031b9d1d7559cda393629/1710763764370-kpqe5g.jpeg
  // setBannerImage(
  //   `https://apisitem.ecommcube.com/images/industry_template_images/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/${file}`
  // );
  console.log(logo);

  return (
    <div className={myFont.className}>
      <Head>
        <title>Next 14 Template</title>
      </Head>
      <Navbar />
      <Banner
        title="New Fashion Trends"
        image="https://zoya.qodeinteractive.com/wp-content/uploads/2021/01/blog-list-img-5.jpg"
      />
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

export async function getStaticProps() {
  try {
    const _logo = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_MANAGER}/public/industry_template_data/${
        process.env.NEXT_PUBLIC_INDUSTRY_ID
      }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${"Banner"}`
    );

    if (!_logo.ok) {
      throw new Error(`Failed to fetch logo: ${_logo.statusText}`);
    }

    const logo = await _logo.json();

    return {
      props: {
        logo,
      },
    };
  } catch (error) {
    console.error("Error fetching logo:", error);
    return {
      props: {
        logo: null,
      },
    };
  }
}
