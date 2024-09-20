import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Button } from "./ui/button";
import { Menu, User } from "lucide-react";
import Sidebar from "./Sidebar";
export default function Header() {
  return (
    <>
      <div className="flex flex-row p-4 justify-between align-middle bg-muted">
        <div>this is logo</div>
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Full Time Jobs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Suii</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Internships
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Reviews
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* login and hamburger menu */}
        <div className="flex flex-row align-middle justify-evenly">
          <div className="hidden md:flex ">
            <Button variant="muted">
              <User />
              Login/Signup
            </Button>
          </div>
         <Sidebar/>
        </div>
      </div>
    </>
  );
}
