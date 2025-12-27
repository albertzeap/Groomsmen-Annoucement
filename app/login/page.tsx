"use client";
import { useState, useEffect } from "react";
import { LoginForm } from "@/components/LoginForm";
import { Announcement } from "@/components/Announcement";
import { useRouter } from "next/navigation";

const loginTitle = "An Important Question...";
const loginDescription =
  "You've been considered for a top secret mission involving good times, praying when neccessary, Friday night dancing, and so much more. But first, who are you? Fill out the fields below and then we can keep talking.";

export default function Page() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Announcement title={loginTitle} description={loginDescription} />
      <LoginForm onAuthenticated={() => setIsAuthenticated(true)} />
    </div>
  );
}
