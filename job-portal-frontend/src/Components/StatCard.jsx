import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Progress } from "@/components/ui/progress";

export default function StatCard({ title, value, path }) {
  return (
    <Card className="w-fit">
      {/* <CardHeader>
        <CardDescription>{title}</CardDescription>
      </CardHeader> */}
      <CardContent className="flex flex-row gap-4 items-center">
        <div>
          <CardTitle className="text-4xl">{value}</CardTitle>
          <Label>{title}</Label>
        </div>
        <div className="w-[200px] h-[100px]">
          <img src={path} alt="" />
        </div>
      </CardContent>
      <CardFooter>
        {/* <Progress value={25} aria-label="25% increase" /> */}
      </CardFooter>
    </Card>
  );
}
