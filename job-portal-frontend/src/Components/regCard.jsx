import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
export default function RegCard({ title, path }) {
  return (
    <Card className="flex flex-col items-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <img src={path} alt="" className="h-[70px]" />
          Rating: 5/5
          <Button className="mt-3 rounded-3xl">View Jobs</Button>
        </div>
      </CardContent>
    </Card>
  );
}
