import React from "react";
import icon1 from "@/public/images/aiony-haust.webp";
import icon2 from "@/public/images/avatar-201.webp";
import icon3 from "@/public/images/avatar-202.webp";
import icon4 from "@/public/images/avatar-203.webp";
import icon5 from "@/public/images/jessica-felicon.webp";
import Image from "next/image";
import badge from "@/public/images/quote-icon.svg";

interface Props {
  className?: string;
}

const StarRaiting: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <Image
        src={badge}
        alt="user1"
        className="absolute top-0 right-0 w-10 p-2 bg-foreground rounded-full translate-x-1/2 -translate-y-1/2"
      />
      <p>Happy Customers</p>
      <div className="flex gap-2">
        <span>⭐️</span>
        <span>⭐️</span>
        <span>⭐️</span>
        <span>⭐️</span>
        <span className="relative w-3 overflow-hidden">
          <span className="inline-block w-6 translate-x-[0%]">⭐️</span>
        </span>
      </div>
      {/* sample rounded images of users */}
      <div className="flex">
        <Image src={icon1} alt="user1" className="w-12 h-12 rounded-full" />
        <Image
          src={icon2}
          alt="user2"
          className="w-12 h-12 rounded-full -ml-4"
        />
        <Image
          src={icon3}
          alt="user3"
          className="w-12 h-12 rounded-full -ml-4"
        />
        <Image
          src={icon4}
          alt="user4"
          className="w-12 h-12 rounded-full -ml-4"
        />
        <Image
          src={icon5}
          alt="user5"
          className="w-12 h-12 rounded-full -ml-4"
        />
      </div>
    </div>
  );
};

export default StarRaiting;
