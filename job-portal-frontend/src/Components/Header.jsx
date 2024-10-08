import React from "react";
import { Link } from "react-router-dom";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu, User } from "lucide-react";
import Sidebar from "./Sidebar";
import MenuBar from "./MenuBar";
import LogSidebar from "./LogSidebar";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <>
      <div className="flex flex-row p-4 justify-between align-middle  shadow-lg">
        <div className="w-[50px]">
          <img src="src\assets\logo.png" alt="" />
        </div>
        <div className="hidden md:flex">
          <MenuBar />
        </div>

        {/* login and hamburger menu */}
        <div className="flex flex-row items-center justify-evenly ">
          <div className="hidden md:flex ">
            <Link to="/login">
              <Button variant="muted">
                <User />
                Login/Signup
              </Button>
            </Link>
          </div>
          <div className="hidden md:flex ">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent ">
                    For Employer
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col p-3">
                    <NavigationMenuLink>
                      <Link to="recruit/login" className="p-4 w-5 ">
                        Login
                      </Link>
                    </NavigationMenuLink>
                    <hr />
                    <NavigationMenuLink>
                      <Link to="recruit/register" className="p-4 w-5">
                        Register
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
            {/* to be removed */}
            
            {/* to be displayed if logged in */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
          {/* <Sidebar /> */}
          <LogSidebar />
        </div>
      </div>
    </>
  );
}
