"use client";
import { useState, useEffect } from "react";
import { LoginForm } from "@/components/LoginForm";
import { LoginAnnouncement } from "@/components/LoginAnnouncement";
import { Quiz } from "@/components/Quiz";
import { Button } from "@/components/ui/button";
import { FieldChoiceCard } from "@/components/FieldChoiceCard";

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState("");

  useEffect(() => {
    const user = sessionStorage.getItem("authenticatedUser");
    if (user) {
      setAuthenticatedUser(user);
    }
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {isAuthenticated ? (
        <>
          <div className="text-xl mb-9">
            Glad to see you made it {authenticatedUser}!
          </div>
          <Quiz />
          <Button onClick={() => setIsAuthenticated(false)}>Reset</Button>
        </>
      ) : (
        <>
          <LoginAnnouncement announcement="An Important Question..." />
          <LoginForm onAuthenticated={() => setIsAuthenticated(true)} />
        </>
      )}
    </div>
  );
}
