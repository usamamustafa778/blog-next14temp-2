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
import MarkdownIt from "markdown-it";

const myFont = Montserrat({ subsets: ["cyrillic"] });

export default function Blog({ logo, myblog }) {
  const router = useRouter();
  const { blog } = router.query;

  const markdownIt = new MarkdownIt();
  const content = markdownIt.render(myblog?.value);

  return (
    <div className={myFont.className}>
      <Navbar logo={logo} />
      <Banner
        title={blog.replaceAll("-", " ")}
        image={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/industry_template_images/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/${myblog?.file_name}`}
      />
      <FullContainer>
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-home gap-14 w-full">
            <div>
              <div
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
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

export async function getServerSideProps({ params, res }) {
  const _blog = await fetch(
    `${
      process.env.NEXT_PUBLIC_SITE_MANAGER
    }/api/public/industry_template_data/${
      process.env.NEXT_PUBLIC_INDUSTRY_ID
    }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${params.blog.replaceAll(
      "-",
      "_"
    )}`
  );
  const blog = await _blog.json();

  const _blog_list = await fetch(
    `${
      process.env.NEXT_PUBLIC_SITE_MANAGER
    }/api/public/industry_template_data/${
      process.env.NEXT_PUBLIC_INDUSTRY_ID
    }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${"blog_list"}`
  );
  const blog_list = await _blog_list.json();

  const isValidBlog = blog_list.data[0].value.some(
    (item) => item.title.replaceAll(" ", "-") === params.blog
  );

  if (!isValidBlog) {
    return {
      notFound: true,
    };
  }

  const _logo = await fetch(
    `${
      process.env.NEXT_PUBLIC_SITE_MANAGER
    }/api/public/industry_template_data/${
      process.env.NEXT_PUBLIC_INDUSTRY_ID
    }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${"logo"}`
  );
  const logo = await _logo.json();

  return {
    props: { logo: logo.data[0], myblog: blog.data[0] },
  };
}
