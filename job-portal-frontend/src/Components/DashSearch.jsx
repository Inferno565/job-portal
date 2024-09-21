import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";

export default function DashSearch() {
  return (
    <Card className="shadow-none border-0 bg-secondary">
      <CardHeader>
        <CardTitle className=" text-3xl md:text-5xl text-center">
          Find your dream job
        </CardTitle>
        <CardDescription className=" text-lg md:text-2xl text-center">
          Some description{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-row gap-2 max-w-[800px] ml-auto mr-auto rounded-3xl shadow-xl border-4 p-3">
          <div className=" flex-col flex md:flex-row w-full items-center md:justify-between gap-4">
            <div className="w-full flex flex-row items-center">
              <Search className=" md:w-[50px] mr-2 md:mr-0 " />

              <Input
                placeholder="Job Title"
                className="h-[50px] rounded-3xl dark:border-gray-50  "
              />
            </div>
            <div className="w-full flex flex-row items-center">
              <MapPin className="mr-2 md:mr-0 md:w-[50px] " />
              <Input
                placeholder="Location"
                className="h-[50px] rounded-3xl dark:border-gray-50"
              />
            </div>
            <Button className="w-[200px] h-[50px] rounded-3xl md:ml-2 bg-primary text-secondary font-bold">
              Search
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
