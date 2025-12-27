"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { useWindowSize } from "react-use";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Confetti from "react-confetti";

export default function AnnouncementPage() {
  const router = useRouter();
  const { width, height } = useWindowSize();
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
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={150}
        gravity={0.35}
      />
      {authenticatedUser && (
        <div className="w-full px-4 flex justify-center">
          <Card className="w-full max-w-lg text-center shadow-lg">
            <CardHeader>
              <Badge className="mx-auto my-3 w-fit" variant="secondary">
                TOP SECRET • CLASSIFIED
              </Badge>

              <CardTitle className="text-2xl font-bold my-2">
                Mission Status: Approved ✅
              </CardTitle>

              <CardDescription className="text-sm  my-2">
                After extensive evaluation and prayerful discernment…
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              <p className="text-lg font-medium">
                {authenticatedUser
                  ? `${authenticatedUser}, you are`
                  : "You are"}{" "}
                <span className="font-bold underline">
                  selected and fully qualified
                </span>{" "}
                to serve as a
              </p>

              <p className="text-4xl font-extrabold space-y-4 ">
                🎉 GROOMSMAN 🎉
              </p>

              <p className="text-sm text-muted-foreground">
                Please report for duty on the wedding day. Dress code, moral
                support, and celebratory energy required. I'll hit you up with
                more details.
              </p>

              <p className="text-xs italic text-muted-foreground">
                *Saintly conduct encouraged. Goofiness permitted.*
              </p>
            </CardContent>

            <CardFooter className="flex justify-center">
              <Button
                variant="destructive"
                onClick={() => {
                  sessionStorage.clear();
                  router.push("/login");
                }}
              >
                Reset Mission
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
