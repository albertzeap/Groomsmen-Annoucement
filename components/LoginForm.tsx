"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon } from "@hugeicons/core-free-icons";
import { groomsmen } from "@/data/groomsmen";

type LoginFormProps = {
  onAuthenticated: () => void;
};

function LoginForm({ onAuthenticated }: LoginFormProps) {
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Get the form data so that we can pull the values from it
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const fullName = `${firstName.trim()} ${lastName.trim()}`.toLowerCase();
    // Check if the full name exists as a key in the map
    if (groomsmen.has(fullName)) {
      onAuthenticated();
      sessionStorage.setItem("authenticatedUser", fullName);
      e.currentTarget.reset();
      console.log("Authenticated");
    } else {
      setError("Seems like we don't know you.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const ErrorMessage = ({ message }: { message: string }) => {
    return (
      <Alert
        variant="destructive"
        className="w-full flex items-center justify-center"
      >
        <HugeiconsIcon className="h-4 w-4" icon={Alert02Icon} />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    );
  };

  return (
    <form
      className="flex flex-col items-center gap-4 w-full max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="h-10 mb-4 w-full">
        {error && <ErrorMessage message={error} />}
      </div>
      <Field className="w-full">
        <FieldLabel htmlFor="firstName">First Name</FieldLabel>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Albert"
        />
      </Field>
      <Field className="w-full">
        <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
        <Input id="lastName" name="lastName" type="text" placeholder="Paez" />
        <Button type="submit" variant="ghost">
          Submit
        </Button>
      </Field>
    </form>
  );
}

export { LoginForm };
