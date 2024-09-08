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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2084375478057!2d85.52148757394824!3d25.196192331744133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f5cd977b7dbb%3A0x1adf877c3e2b8895!2sHind%20Medical%20Hall!5e0!3m2!1sen!2sin!4v1725786211494!5m2!1sen!2sin"
          width="100%"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Section7;
