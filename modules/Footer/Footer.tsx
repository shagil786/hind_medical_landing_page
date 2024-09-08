import Image from "next/image";
import React from "react";
import profileIcon from "@/public/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { GoogleMapsEmbed } from "@next/third-parties/google";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-8">
      <div className="flex gap-1 items-center text-xl font-semibold">
        <Image src={profileIcon} alt="profile_icon" width={100} height={100} />
        <p>Hind Medical Hall</p>
      </div>
      <div className="grid grid-rows-2 gap-4 text-lg font-semibold text-gray-700">
        <div className="grid grid-cols-2">
          <a>Home</a>
          <a>About Us</a>
        </div>
        <div className="grid grid-cols-2">
          <a>Our Services</a>
          <a>Shop</a>
        </div>
        <div className="flex gap-4 py-2 text-blue-450">
          <Link href="#">
            <Facebook />
          </Link>
          <Link href="#">
            <Twitter />
          </Link>
          <Link href="#">
            <Instagram />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            href="mailto:hindmedicalhall@gmail.com"
            className="flex items-center gap-2 text-blue-950"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="h-6 w-6 text-blue-450"
            />
            <span>hindmedicalhall@gmail.com</span>
          </Link>
          <Link
            href="tel:+918210041012"
            className="flex items-center gap-2 text-blue-950"
          >
            <FontAwesomeIcon icon={faPhone} className="h-6 w-6 text-blue-450" />
            <span>+91 82100-41012</span>
          </Link>
        </div>
        <p className="text-base text-center">
          © HindMedical Hall. All Rights Reserved 2024{" "}
          <Link href="#">Licensing</Link>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
