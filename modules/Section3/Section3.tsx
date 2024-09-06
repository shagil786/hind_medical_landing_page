import Image from "next/image";
import React from "react";
import docImg from "@/public/images/rectangle-2031.webp";

interface Props {
  aboutData: any[];
}

const Section3: React.FC<Props> = (props) => {
  const { aboutData } = props;

  return (
    <div className="my-0 md:my-10 py-20 flex md:flex-row flex-col md:w-9/12 w-full gap-10 relative">
      <Image src={docImg} alt="doc-image" />
      <div className="w-full flex flex-col md:gap-0 gap-10 px-10 items-start">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Why We Are <span className="block text-left">Better</span>
        </h1>
        <p className="w-full text-lg md:text-xl">
          With over 50 years of experience, serving more than 10,000 satisfied
          customers, and offering a wide range of over 800 healthcare products,
          we are committed to delivering quality and care that you can trust.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:absolute relative bottom-0 md:-translate-x-1/4 -translate-x-0 md:-translate-y-2/3 -translate-y-0 bg-blue-450 p-6 px-10 md:w-max w-full rounded-xl">
          {aboutData?.map((each, index) => (
            <div
              key={`about-${index}`}
              className="w-full flex flex-col items-center justify-between gap-4 text-background"
            >
              <h1 className="text-5xl md:text-6xl font-bold">{each?.title}</h1>
              <p className="whitespace-nowrap text-normal md:text-md">
                {each?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
