"use client";
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
