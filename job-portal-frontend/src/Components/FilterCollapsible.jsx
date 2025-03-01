import React from "react";
import { Button } from "./ui/button";
import { FilterIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ThemeToggle from "./ThemeToggle";
export default function FilterCollapsible() {
      const filters = [
        { title: "Experince", values: ["1", "2", "3"] },
        { title: "Experince", values: ["1", "2", "3"] },
        { title: "Experince", values: ["1", "2", "3"] },
      ];

      let count = 0;
  return (
    <>
      <Sheet>
        <SheetTrigger className="md:hidden flex">
            <Button variant="secondary">
                      <FilterIcon />
                      Filter Jobs
            </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex flex-row items-center gap-3">
           Filter Jobs 
            </SheetTitle>
            <SheetDescription>
              <hr />
            </SheetDescription>
          </SheetHeader>
          <div className="text-base">
                   <Accordion collapsible>
                     {filters.map((filter) => {
                       count = count + 1;
                       return (
                         <AccordionItem value={count}>
                           <AccordionTrigger className="text-base">
                             {filter.title}
                           </AccordionTrigger>
           
                           {filter.values.map((value) => {
                             return (
                               <AccordionContent className="flex items-center space-x-2">
                                 <Checkbox id="terms" />
                                 <label
                                   htmlFor="terms"
                                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                   {value}
                                 </label>
                               </AccordionContent>
                             );
                           })}
                         </AccordionItem>
                       );
                     })}
                   </Accordion>
          </div>
          <SheetFooter className="mt-4">
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
