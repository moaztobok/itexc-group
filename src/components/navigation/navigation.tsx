"use client";
import { cn, getUnitColor } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useHover } from "usehooks-ts";
import { CustomButton } from "../shared/Custom-btn";
import { Icon } from "./icon";
import { NavigationItems } from "./NavLinks";
import SmallScreenNav from "./SmallScreenNav";
import { usePathname } from "next/navigation";
const Navigation = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-fit z-30 transition-all duration-500",
        isScrolled ? "bg-black/75 backdrop-blur-3xl" : "bg-transparent"
      )}
    >
      <div className="wrapper py-3 my-0 flex justify-between items-center">
        <Link href="/">
          <Icon
            icon={isScrolled || isHover ? getUnitColor(pathname) : "white"}
          />
        </Link>
        <div className={cn("gap-6 items-center hidden md:flex text-white ")}>
          <NavigationItems />
          <Link href="#contact">
            <CustomButton label="Contact us" />
          </Link>
        </div>
        <div className="md:hidden ">
          <SmallScreenNav />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
