import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Groomsman } from "@/data/groomsmen";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertEnvToGroomsman() {
  const groomsmanString = process.env.NEXT_PUBLIC_GROOMSMEN_NAMES;
  if (!groomsmanString) {
    console.error("Could not load groomsmen names");
  }
  const namesList = groomsmanString?.split(",");
  const groomsmen = new Map<string, Groomsman>();
  namesList?.forEach((name) => {
    let nameParts = name.split(" ");
    let firstName = nameParts[0];
    let lastName = nameParts[1];
    let groomsman = { firstName: firstName, lastName: lastName };
    groomsmen.set(name.toLowerCase(), groomsman);
  });

  return groomsmen;
}
