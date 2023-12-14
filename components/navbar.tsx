"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import UserAccountNav from "./userAccountNav";
import { Menu, XOctagon } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import NavbarItem from "./navbar-item";

export const NavBar = () => {
  const [navbar, setNavbar] = useState(false); 

  const navLinks = [
    {
      label: "home",
      url: "/",
    },
    {
      label: "services",
      url: "/services",
    },
    {
      label: "about us",
      url: "/about-us",
    },
    {
      label: "contact us",
      url: "/contact-us",
    },
    {
      label: "join us",
      url: "/sign-up",
    },
    {
      label: "sign in",
      url: "/login",
    },
  ];

  return (
    <nav className="sticky right-0 top-0 w-full bg-wwlgreen md:max-h-20">
      <div className="mx-auto justify-between h-14 px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div className="flex w-full flex-row items-center justify-between ">
          <div className={`${navbar ? "hidden" : "block"}`}>
            <Logo />
          </div>
          <div className="md:hidden">
            <Button
              className="bg w-full bg-wwlgreen font-bold text-wwblue hover:bg-wwgreen hover:text-wwlblue"
              variant="outline"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <div></div> : <Menu color="#2d428b" />}
            </Button>
          </div>

          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? "block p-12 md:p-0" : "hidden"
            }`}
          >
            <div className="flex items-center justify-between pb-3 md:hidden">
              <Logo />
              <Button
                className="bg justify-end bg-wwlgreen font-bold text-wwmblue hover:bg-wwgreen hover:text-wwlblue"
                variant="outline"
                onClick={() => setNavbar(!navbar)}
              >
                <XOctagon color="#2d428b" />
              </Button>
            </div>
            <ul className="h-screen items-center justify-center md:justify-end md:flex md:h-auto">
              {navLinks.map(menu => (
                <li key={menu.label} className="flex justify-center items-center md:justify-end">
                  <NavbarItem
                    label={menu.label}
                    url={menu.url}
                    setNavbar={() => setNavbar(false)}
                  />
                </li>
              ))}              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

