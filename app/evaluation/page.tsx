"use client";
import { useState, useEffect } from "react";
import { Quiz } from "@/components/Quiz";
import { useRouter } from "next/navigation";

export default function EvaluationPage() {
  const router = useRouter();
  const [authenticatedUser, setAuthenticatedUser] = useState("");

  useEffect(() => {
    const user = sessionStorage.getItem("authenticatedUser");
    if (user) {
      setAuthenticatedUser(user);
    } else {
      router.push("/login");
    }
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {authenticatedUser && <Quiz />}
    </div>
  );
}
