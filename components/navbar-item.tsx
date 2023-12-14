"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { buttonVariants } from "./ui/button";

interface NavbarItemProps {
  label: string;
  url: string;
  setNavbar?: () => void;
}

const NavbarItem = ({ label, url, setNavbar }: NavbarItemProps) => {
  const pathname = usePathname();
  console.log('label =', label);
  console.log('url = ', url)

  return (
    <Link
      href={url}
      onClick={() => setNavbar}
      className={buttonVariants({
        size: "sm",
        className: `link capitalize hover:bg-wwlgreen hover:text-wwgreen font-extrabold ${
          pathname === `${url}` ? "active" : ""
        }`,
        variant: "ghost",
      })}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;
