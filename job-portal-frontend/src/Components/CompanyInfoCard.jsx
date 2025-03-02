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
export default function CompanyInfoCard() {
  let company_name = "Google";
  return (
    <>
      <Card className="max-w-screen-md md:w-[500px]">
        <CardHeader>
          <div className="w-16">
            <img src="src\assets\accent.png"></img>
          </div>
          <CardTitle className="text-lg">Accenture</CardTitle>
          <CardDescription>Some desceriptin about the job </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <text className="text-sm">Headquarters</text>
            </div>
            <div className="grid gap-3">
              <text className="text-sm">Company size </text>
            </div>
            <div className="grid gap-3 w-24">
              <Button>View More Jobs from {company_name}</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
