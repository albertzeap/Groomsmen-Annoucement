"use client";
import { useState, useEffect } from "react";
import { LoginForm } from "@/components/LoginForm";
import { Announcement } from "@/components/Announcement";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

const loginTitle = "TOP-SECRET MISSION...";
const loginDescription =
  "You've been considered for a top secret mission involving good times, praying when neccessary, Friday night dancing, and so much more. But first, who are you? Fill out the fields below and then we can keep talking.";

export default function Page() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Description */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-12 flex-col justify-center items-center">
        <div className="max-w-md space-y-6">
          <Badge className="w-fit" variant="secondary">
            TOP SECRET • CLASSIFIED
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900">{loginTitle}</h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            {loginDescription}
          </p>
          <div className="w-full max-w-sm mt-8">
            <img
              src="/retro-detectives-mascots.png"
              alt="Retro Folder"
              title="Picture of Retro-Themed Folder Mascot"
              className="w-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 lg:p-12 bg-amber-50 lg:bg-white relative overflow-hidden">
        {/* Mobile: Revamped layout with cream background */}
        <div className="lg:hidden w-full flex flex-col items-center relative">
          {/* Top secret stamp effect */}
          <div className="relative mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
            <Badge className="mx-auto w-fit shadow-md" variant="secondary">
              TOP SECRET • CLASSIFIED
            </Badge>
          </div>

          {/* Announcement with paper document styling */}
          <div className="w-full animate-in fade-in slide-in-from-top-6 duration-700 delay-100">
            <div
              className="bg-amber-50 border-2 border-slate-300 rounded-sm p-6 shadow-md mb-6"
              style={{
                boxShadow:
                  "0 2px 4px rgba(0,0,0,0.1), inset 0 0 60px rgba(0,0,0,0.02)",
              }}
            >
              <Announcement title={loginTitle} description={loginDescription} />
            </div>
          </div>

          {/* Mascot image with paper document styling */}
          <div className="w-full max-w-sm mx-auto mb-6 animate-in fade-in zoom-in-95 duration-700 delay-200">
            <div className="relative">
              {/* Image container with paper texture */}
              <div
                className="relative bg-amber-50 rounded-sm p-4 shadow-md border-2 border-slate-300"
                style={{
                  boxShadow:
                    "0 2px 4px rgba(0,0,0,0.1), inset 0 0 60px rgba(0,0,0,0.02)",
                }}
              >
                <img
                  src="/retro-detectives-mascots.png"
                  alt="Retro Folder"
                  title="Picture of Retro-Themed Folder Mascot"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Keep it simple */}
        <div className="hidden lg:block w-full max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          <LoginForm onAuthenticated={() => setIsAuthenticated(true)} />
        </div>

        {/* Mobile: Login form */}
        <div className="lg:hidden w-full max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <LoginForm onAuthenticated={() => setIsAuthenticated(true)} />
        </div>
      </div>
    </div>
  );
}
