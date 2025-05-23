import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { BookMarked, Save } from "lucide-react";
export default function JobCard() {
  return (
    <>
      <Card className="max-w-screen-md md:w-[750px]">
        <CardHeader>
          <CardTitle className="text-lg">Job Role Title</CardTitle>
          <CardDescription>Some desceriptin about the job </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <text className="text-sm">Job Responsiblities </text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              nam explicabo velit aliquid exercitationem pariatur esse
              dignissimos deleniti facilis eaque totam sint, accusantium
              quisquam. Nulla dolor doloribus voluptates nobis esse! A est
              fugit, reprehenderit doloremque molestiae distinctio repellendus
              quis aliquam sit, quidem reiciendis cumque autem error architecto
              alias deserunt debitis cupiditate sapiente rerum! Assumenda,
              corrupti suscipit eius minima nostrum ducimus?
            </div>
            <div className="grid gap-3">
              <text className="text-sm"> Required Qualifications</text>
            </div>
            <div className="grid gap-3">
              <text className="text-sm"> Working Hours</text>
            </div>
            <div className="grid gap-3">
              <text className="text-sm"> Salary</text>
            </div>
            <div className="grid gap-3 w-24">
              <div className="flex flex-row gap-3">
                <Dialog>
                  <DialogTrigger>
                    <Button> Apply</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        // Use react-hook-forms
                        <form className=" P-6 max-w-80 flex flex-col m-4">
                          <div className="">
                            <Label htmlFor="">Some info required</Label>
                            <Input type="text" />
                          </div>
                        </form>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <Button variant="secondary">
                  <BookMarked></BookMarked> Save Job
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
