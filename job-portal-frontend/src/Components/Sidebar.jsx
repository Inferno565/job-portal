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
                <AccordionTrigger className="text-base">
                  Full Time Jobs
                </AccordionTrigger>
                <AccordionContent>Data Science Roles </AccordionContent>
                <AccordionContent>Machine Learning Roles </AccordionContent>
                <AccordionContent>Data Science Roles </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base">
                  Internships
                </AccordionTrigger>
                <AccordionContent>Onsite</AccordionContent>
                <AccordionContent>Remote </AccordionContent>
                <AccordionContent>With Job offfer </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base">More</AccordionTrigger>
                <AccordionContent>Data Science Roles </AccordionContent>
                <AccordionContent>Machine Learning Roles </AccordionContent>
                <AccordionContent>Data Science Roles </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex-row gap-2 flex align-middle mt-4 justify-evenly ">
              <Switch />
              Toggle Dark/Light Mode
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
