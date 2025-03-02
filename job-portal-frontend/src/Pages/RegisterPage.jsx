import RegisterForm from "@/Components/RegisterForm";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="hidden bg-muted lg:block w-full h-full">
        <img
          src="src/assets/Airbus.png"
          alt=""
          // className="object-cover w-full h-full"
        />
      </div>
      <div className="flex items-center justify-center h-full">
        <RegisterForm />
      </div>
    </div>
  );
}
