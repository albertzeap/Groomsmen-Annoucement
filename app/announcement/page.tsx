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

export default function AnnouncementPage() {
  const router = useRouter();
  const [authenticatedUser, setAuthenticatedUser] = useState("");

  useEffect(() => {
    const user = sessionStorage.getItem("authenticatedUser");
    console.log(user);
    if (user) {
      setAuthenticatedUser(user);
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Button
        onClick={() => {
          sessionStorage.clear();
          router.push("/login");
        }}
      >
        Reset
      </Button>
    </div>
  );
}
