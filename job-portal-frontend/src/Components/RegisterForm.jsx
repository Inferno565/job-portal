import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PhoneInput from "react-phone-number-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Enter Your Details</CardTitle>
        <CardDescription>Enter your information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Mobile number</Label>
            <Input
              id="number"
              type="tel"
              placeholder="Recruiters can contact through this number"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Work Status</Label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">
                  Experienced (Have work or internship experience)
                </SelectItem>
                <SelectItem value="dark">
                  Fresher (Completed Graduation)
                </SelectItem>
                <SelectItem value="system">
                  Student (Enrolled in a course)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Link to="/">
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </Link>
          <Button variant="outline" className="w-full">
            Continue with Google
            <img src="src\assets\google.png" alt="" className="w-5 m-2" />
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="#" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
