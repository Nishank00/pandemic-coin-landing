/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { client, urlFor } from "../../../utils/sanityUtils";
import { useParams } from "next/navigation";
import { PortableText } from "next-sanity";
const Blog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "blogs" && _id == "${id}"]`)
      .then((data) => setBlogData(data[0]))
      .catch(console.error);
  }, [id]);

  console.log(blogData);
  return (
    <>
      <Head>
        <title>PDC | {blogData?.title}</title>
      </Head>
      <div className="flex flex-wrap">
        <div className="flex justify-center items-start flex-col gap-6 p-4 md:p-20 relative z-50 w-full">
          <h1 className="font-bold text-[22px] lg:text-[32px] leading-[32px] lg:leading-[51px] text-start">
            {blogData?.title}
          </h1>
          <h3 className="text-[20px] lg:text-[22px] leading-[18px] lg:leading-[53px] text-start text-white/75">
            {blogData?.description}
          </h3>
          <div className="flex flex-col gap-4 w-full">
            {blogData?.mainImage && (
              <img
                src={urlFor(blogData?.mainImage.asset._ref)
                  .width(1000)
                  .height(300)
                  .url()}
                width={800}
                className="object-contain w-full mx-auto rounded-2xl md:rounded-[50px]"
                alt={blogData?.title}
              />
            )}
          </div>
          {blogData?.content && <PortableText value={blogData.content} />}
        </div>
      </div>
    </>
  );
};

export default Blog;
