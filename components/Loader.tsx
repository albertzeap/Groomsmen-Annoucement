import { Spinner } from "@/components/ui/spinner";

export function Loader() {
  return (
    <>
      <Spinner className="size-10" />
      <h1>Calculating</h1>
    </>
  );
}
