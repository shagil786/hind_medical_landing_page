import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Section7 = () => {
  return (
    <div className="h-auto md:h-full md:my-10 my-5 py-10 w-full flex flex-col gap-8 items-center text-foreground bg-blue-450 rounded-lg">
      <Image src="" alt="medicine_image" />
      <div className="text-background p-4 px-8 flex flex-col gap-6">
        <p className="flex flex-col gap-1 text-4xl">
          <span>Make An Order</span>
          <span>And Get Free</span>
          <span>Delivery</span>
        </p>
        <p>
          Your Ultimate Partner in Healthcare: Comprehensive Solutions for
          Medicine, Pharmacy, and Beyond
        </p>
        <Button className="w-fit">Make an Order</Button>
      </div>
      <div className="w-full px-6 flex flex-col gap-4">
        <h1 className="text-left text-white text-xl">You can find us here:</h1>
        <GoogleMapsEmbed
          apiKey=""
          mode="place"
          q=""
          width="100%"
          style="height: 60vmin; border-radius:10px;"
        />
      </div>
    </div>
  );
};

export default Section7;
