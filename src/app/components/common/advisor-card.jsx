import React from "react";
import Link from "next/link";

const Advisor = ({ member }) => (
  <Link href={member.url} >
    <div className="bg-black p-4">
      <h2 className="text-white text-center font-semibold text-lg mb-2">TBD</h2>
      <p className="text-gray-400 text-center text-sm mb-2">{member.title}</p>
    </div>
  </Link>
);

export default Advisor;
