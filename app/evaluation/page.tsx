"use client";
import { useState, useEffect } from "react";
import { Quiz } from "@/components/Quiz";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function EvaluationPage() {
  const router = useRouter();
  const [authenticatedUser, setAuthenticatedUser] = useState("");
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem("authenticatedUser");
    if (user) {
      setAuthenticatedUser(user);
    } else {
      router.push("/login");
    }
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Quiz
        isQuizFinished={isQuizFinished}
        setIsQuizFinished={setIsQuizFinished}
      />
      <Button
        onClick={() => {
          sessionStorage.clear();
          setIsQuizFinished(false);
          router.push("/login");
        }}
      >
        Reset
      </Button>
    </div>
  );
}
