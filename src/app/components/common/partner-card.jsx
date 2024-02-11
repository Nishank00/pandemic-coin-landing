import Image from "next/image";
import Link from "next/link";
import React from "react";

const partnerCard = ({ member }) => {
  return (
    <>
      <Link href={member.url} >
        <div
          data-aos="fade-in"
          className="h-[111px] border-[0.75px] border-[solid] border-[#342CB2] border-opacity-80 relative flex items-center justify-center overflow-hidden bg-pdc-d-gray/30  px-12 py-8 rounded-lg"
        >
          <div className="absolute top-0 w-[60px] h-[80px] blur-2xl left-16 rounded-full bg-gradient-to-r from-blue-600 to-pink-600"></div>
          <div className="flex items-center justify-center flex-col">
            {member.logo === "" ? (
              <h2 className="text-[#FFF] text-center font-[Catamaran] text-[20px] not-italic font-semibold leading-[128%] uppercase">
                {member.title}
              </h2>
            ) : (
              <Image
                src={member.logo}
                width={85}
                height={100}
                alt={member.title}
              />
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default partnerCard;
