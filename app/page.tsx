"use client";
import { useState, useEffect } from "react";
import { Announcement } from "@/components/Announcement";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState("");

  useEffect(() => {
    const user = sessionStorage.getItem("authenticatedUser");
    console.log(user);
    if (user) {
      setAuthenticatedUser(user);
    } else {
      router.push("/login");
    }
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm text-center">
        <CardHeader>
          <CardTitle>
            <Announcement
              title="Top-Secret Evaluation"
              description={`Welcome to the evaluation, ${authenticatedUser}`}
            />
          </CardTitle>

          <CardContent>
            <img
              src="/retro-folder.png"
              alt="Retro Folder"
              title="Picture of Retro-Themed Folder Mascot"
              className="relative z-20 aspect-square w-full object-cover "
            />
          </CardContent>
          <CardDescription>
            You've been considered for a very special position within the life
            of Albert Paez. The following evaluation will take you through a
            series of scenarios which will test your competence for this role.
          </CardDescription>
          <CardFooter className="flex flex-col items-center justify-center">
            <Button onClick={() => router.push("/evaluation")}>
              Let's do this!
            </Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
}
