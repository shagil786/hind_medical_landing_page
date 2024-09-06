"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { pathsToHide } from "./NavPaths";
import Navbar from "./Navbar";
import { useNextTheme } from "@/provider/NextThemeProvider";

const NavLayout = () => {
  const params = usePathname();
  const path = params.split("/");
  const navigator = path[path.length - 1];
  const isVisible = pathsToHide.some((p) => navigator.includes(p));
  const { handleThemeChange } = useNextTheme();
  const headerList = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];
  if (isVisible) {
    return null;
  }

  const isActive = (href: string) => params.endsWith(href);

  return (
    <Navbar
      handleThemeChange={handleThemeChange}
      headerList={headerList}
      isActive={isActive}
    />
  );
};

export default NavLayout;
