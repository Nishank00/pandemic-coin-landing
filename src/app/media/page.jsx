/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import VideoCard from "../components/media/VideoCard";
import ReactPlayer from "react-player";
import { client, urlFor } from "../../utils/sanityUtils";

const Media = () => {
  const [videoList, setVideoList] = useState([]);
  const [url, setUrl] = useState();
  const [sectionsData, setSectionsData] = useState([]);
  // const links = ["blogs", "posts", "videos", "news"];

  const playerRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const dataVideos = await client.fetch(`*[_type == "video"]`);
      setVideoList(dataVideos);
      setUrl(dataVideos[0].link);

      const categories = await client.fetch(`*[_type == "category"]`);
      let sections = [];

      for (const category of categories) {
        const blogs = await client.fetch(
          `*[_type == "blogs" && references('${category._id}') ]`
        );
        if (blogs.length > 0) {
          sections.push({
            title: category.title,
            anchor: category.title.toLowerCase(),
            cardData: blogs,
          });
        }
      }
      console.log(sections);
      setSectionsData(sections);
    }

    fetchData();
  }, []);

  return (
    <section className="p-4 md:p-8 mx-auto bg-pdc-d-gray overflow-hidden relative md:pt-[6rem] w-screen">
      <div className="absolute w-[700px] h-[700px] blur-[100px] bg-gradient-to-tr from-[#FF071720] to-[#342CB220] rounded-full right-[-5%] z-0"></div>
      <div className="grid grid-cols-1 md:grid-cols-12 relative z-10 py-12 md:py-4 gap-1 md:gap-5">
        <div className="absolute w-[700px] h-[700px] blur-[200px] bg-pdc-blue rounded-full top-[50%] left-[-20%] z-0"></div>
        <div className="col-span-8 relative z-10">
          <div className="relative rounded-lg overflow-hidden mb-5 h-[700px] z-50">
            <ReactPlayer
              ref={playerRef}
              url={url}
              key={url}
              width="100%"
              height="100%"
              controls
            />
          </div>

          {/* <div className="w-full flex justify-center">
            <div className="w-full flex gap-4 font-semibold ">
              {links.map((link, index) => {
                return (
                  <>
                    <div className="relative group w-full">
                      <p
                        className="text-center text-xl anim hover:text-pri w-full py-4 anim-slo"
                        key={index}
                      >
                        {link}
                      </p>
                      <div
                        className={` absolute anim bottom-0 h-[3px] group-hover:w-full bg-white`}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div> */}
          {sectionsData &&
            sectionsData.map((data, index) => {
              return (
                <div className="py-4" key={index} id={data.anchor}>
                  <h3 className="text-xl mb-4 uppercase">{data.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                    {data &&
                      data.cardData.map((card, index) => (
                        <>
                          <VideoCard
                            title={card.title}
                            description={card.description}
                            image={urlFor(card.mainImage.asset._ref)
                              .width(300)
                              .height(300)
                              .url()}
                          />
                        </>
                      ))}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="col-span-4 relative z-10 md:pl-5 md:border-l space-y-8 md:space-y-4 ">
          <div className="my-4">
            <p className="text-lg bg-white p-3 text-black rounded-[10px] px-5 font-semibold mb-4">
              Recommended
            </p>
            <div className="space-y-4">
              {videoList &&
                videoList.map((data, index) => (
                  <div key={index} className="space-y-4">
                    <div
                      class=" bg-[#111327] flex items-center gap-4 rounded-[20px] shadow-2xl md:mb-6"
                      id="list"
                    >
                      <div class="rounded-[20px] w-1/2 relative overflow-hidden">
                        {data.mainImage?.asset._ref && (
                          <img
                            alt="team"
                            width={500}
                            height={500}
                            className="rounded-[20px] object-cover object-center mb-0"
                            src={urlFor(data.mainImage.asset._ref)
                              .width(500)
                              .height(500)
                              .url()}
                          />
                        )}
                      </div>
                      <div className="px-3 md:p-2 w-full p-0">
                        <p class="text-md font-semibold title-font text-white">
                          {data.title}
                        </p>
                        <h2 class="text-xs md:text-sm leading-relaxed text-[#5F5F5F]">
                          {data.description}
                        </h2>
                        <button
                          onClick={() => {
                            setUrl(data.link);
                            console.log("data.url", data.link);
                          }}
                          className="inline-flex"
                        >
                          <span className="text-xs text-[#1761B0]">
                            Watch Now
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
