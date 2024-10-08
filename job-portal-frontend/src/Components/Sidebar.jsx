import React from "react";
import { Button } from "./ui/button";
import { Menu, MoonIcon, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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

import { Switch } from "./ui/switch";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
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
            <SheetTitle>
              <Button variant="muted" className="text-lg">
                <User />
                Login/Signup
              </Button>
            </SheetTitle>
            <SheetDescription>
              <hr />
            </SheetDescription>
          </SheetHeader>
          <div className="text-base">
            <Accordion collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base">
                  For Employer
                </AccordionTrigger>
                <AccordionContent>Login </AccordionContent>
                <AccordionContent>Signup</AccordionContent>
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
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
