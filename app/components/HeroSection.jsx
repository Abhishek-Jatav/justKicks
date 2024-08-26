import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto bg-red-400 flex px-5 py-24 items-center justify-center flex-col">
        HeroSection
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 h-40 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/img.jpg"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
