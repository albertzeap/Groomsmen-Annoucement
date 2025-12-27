"use client";
import { useState, useEffect } from "react";
import { LoginForm } from "@/components/LoginForm";
import { Announcement } from "@/components/Announcement";
import { useRouter } from "next/navigation";

const loginTitle = "Top-Secret Question...";
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
      <div className="w-full max-w-sm mx-auto">
        <img
          src="/retro-detectives-mascots.png"
          alt="Retro Folder"
          title="Picture of Retro-Themed Folder Mascot"
          className="relative z-20 w-full object-cover "
        />
      </div>
      <LoginForm onAuthenticated={() => setIsAuthenticated(true)} />
    </div>
  );
}
