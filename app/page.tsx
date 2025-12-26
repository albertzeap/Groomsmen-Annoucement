"use client";
import { useState, useEffect } from "react";
import { LoginForm } from "@/components/LoginForm";
import { Announcement } from "@/components/Announcement";
import { Quiz } from "@/components/Quiz";
import { Button } from "@/components/ui/button";
import { FieldChoiceCard } from "@/components/FieldChoiceCard";

const loginTitle = "An Important Question...";
const loginDescription =
  "You've been considered for a top secret mission involving good times, praying when neccessary, Friday night dancing, and so much more. But first, who are you? Fill out the fields below and then we can keep talking.";

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
    <div className="flex flex-col items-center justify-center min-h-screen m-3">
      {isAuthenticated ? (
        <>
          <Announcement
            title="Top-Secret Evaluation"
            description={`Welcome to the evaluation, ${authenticatedUser}`}
          />
          <Quiz />
          <Button onClick={() => setIsAuthenticated(false)}>Reset</Button>
        </>
      ) : (
        <>
          <Announcement title={loginTitle} description={loginDescription} />
          <LoginForm onAuthenticated={() => setIsAuthenticated(true)} />
        </>
      )}
    </div>
  );
}
