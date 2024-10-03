"use client";
import GridPattern from "@/components/magicui/animated-grid-pattern";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const TdGraphics = () => {
  const [isClient, setIsClient] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading indicator, or a default view
  }

  return (
    <>
      {matches ? (
        <iframe
          src="https://my.spline.design/itexcwinklogoerp-84bb9a672a295a9300e442abf4a36a60/"
          className="absolute h-full -z-1"
          width="120%"
          height="120%"
        ></iframe>
      ) : (
        <GridPattern
          className="opacity-30 stroke-white/30"
          rectangleClassName="fill-primary-erp"
        />
      )}
    </>
  );
};

export default TdGraphics;