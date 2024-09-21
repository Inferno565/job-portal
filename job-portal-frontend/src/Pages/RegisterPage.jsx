import RegisterForm from "@/Components/RegisterForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <div className="w-full lg:grid h-fit lg:grid-cols-2">
      <div className="hidden bg-muted lg:block">
        {/* <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
        <h3>Some name or image</h3>
      </div>
      <div className="flex items-center justify-center py-10">
        <RegisterForm />
      </div>
    </div>
  );
}
