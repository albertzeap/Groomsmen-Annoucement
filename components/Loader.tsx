import { Spinner } from "@/components/ui/spinner";

export function Loader({ message }: { message: string }) {
  return (
    <>
      <Spinner className="size-10" />
      <h1 className="text-lg">{message}</h1>
    </>
  );
}
