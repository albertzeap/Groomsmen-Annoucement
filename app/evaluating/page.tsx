"use client";
import { useState, useEffect } from "react";
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

import { Loader } from "@/components/Loader";

const messages = [
  "Counting Hail Marys for courage...",
  "Blessing the gadgets with holy water...",
  "Decrypting Vatican-approved secret codes...",
  "Checking confession readiness...",
  "Cross-referencing with the saints' playbook...",
  "Finalizing groomsmen selection (Amen!)",
];

export default function EvaluatingPage() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 1200);

    const timeout = setTimeout(() => {
      router.push("/announcement");
    }, 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Loader message={messages[currentMessage]} />
    </div>
  );
}
