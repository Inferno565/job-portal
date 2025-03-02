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
                <Button> Apply</Button>
                <Button variant="secondary">
                  <BookMarked></BookMarked>  Save Job
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
