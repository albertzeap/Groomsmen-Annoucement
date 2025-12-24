"use client";
import { useState } from "react";
import { groomsmen } from "@/data/groomsmen";
import { LoginForm } from "@/components/LoginForm";

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-xl mb-9">
        Seems like we have some important news for you!
      </div>
      <LoginForm onAuthenticated={() => setIsAuthenticated(true)} />
    </div>
  );
}
