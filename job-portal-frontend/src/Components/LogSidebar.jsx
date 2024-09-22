import React from "react";
import { Button } from "./ui/button";
import { LogOutIcon, Menu, MoonIcon, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Switch } from "./ui/switch";
import ThemeToggle from "./ThemeToggle";
export default function LogSidebar() {
  return (
    <>
      <Sheet>
        <SheetTrigger className="md:hidden flex ">
          <Button variant="secondary">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex flex-row items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              John Doe
            </SheetTitle>
            <SheetDescription>
              <hr />
            </SheetDescription>
          </SheetHeader>
          <div className="text-base">
            <Accordion collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base">
                  My Profile
                </AccordionTrigger>
                <AccordionContent>Resume</AccordionContent>
                <AccordionContent>Applications</AccordionContent>
                <AccordionContent>Saved Jobs</AccordionContent>
                <AccordionContent>My Account</AccordionContent>
                <AccordionContent>Settings</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base">Jobs</AccordionTrigger>
                <AccordionContent>Full-Time Jobs</AccordionContent>
                <AccordionContent>Part-Time Jobs</AccordionContent>
                <AccordionContent>Work From Home Jobs</AccordionContent>
                <AccordionContent>Freelance Jobs</AccordionContent>
                <AccordionContent> View All {">"} </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base">
                  Internships
                </AccordionTrigger>
                <AccordionContent>On-Site Internships</AccordionContent>
                <AccordionContent>Remote Internships </AccordionContent>
                <AccordionContent>Hybrid Internships </AccordionContent>
                <AccordionContent>With Job offfer </AccordionContent>
                <AccordionContent>Social Media Marketing </AccordionContent>
                <AccordionContent> View All {">"} </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base">More</AccordionTrigger>
                <AccordionContent>Data Science Roles </AccordionContent>
                <AccordionContent>Machine Learning Roles </AccordionContent>
                <AccordionContent>Data Science Roles </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex-row gap-2 flex items-center mt-4 justify-evenly ">
              <ThemeToggle />
              Toggle Dark/Light Mode
              {/* to be removed */}
            </div>
          </div>
          <SheetFooter className="mt-4">
            <Button className="flex flex-row gap-3">
              <LogOutIcon /> Log out
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
