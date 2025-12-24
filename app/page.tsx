"use client";
import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { LoginAnnouncement } from "@/components/LoginAnnouncement";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {isAuthenticated ? (
        <>
          <div>Looks like you got logged in</div>
          <Button onClick={() => setIsAuthenticated(false)}>Reset</Button>
        </>
      ) : (
        <>
          <LoginAnnouncement announcement="I have some news for you..." />
          <LoginForm onAuthenticated={() => setIsAuthenticated(true)} />
        </>
      )}
    </div>
  );
}
