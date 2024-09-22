"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function FilterCard() {

  const filters = [
    { title: "Experince", values: ["1", "2", "3"] },
    { title: "Experince", values: ["1", "2", "3"] },
    { title: "Experince", values: ["1", "2", "3"] },
    ];
    
  let count = 0;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
