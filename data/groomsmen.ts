import { convertEnvToGroomsman } from "@/lib/utils";

// Declare the Groomsmen type that will be used to store the type Groomsmen
export type Groomsman = {
  firstName: string;
  lastName: string;
};

// Initialize the map of groomsmen to be used across the app
export const groomsmen = convertEnvToGroomsman();
