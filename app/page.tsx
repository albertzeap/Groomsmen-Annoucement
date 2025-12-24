import { groomsmen } from "@/data/groomsmen";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Example, ExampleWrapper } from "@/components/example";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-xl mb-9">
        Seems like we have some important news for you!
      </div>
      <form className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
        <Field className="w-full">
          <FieldLabel htmlFor="firstName">First Name</FieldLabel>
          <Input id="firstName" type="text" placeholder="Albert" />
        </Field>
        <Field className="w-full">
          <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
          <Input id="lastName" type="text" placeholder="Paez" />
          <Button type="submit" variant="ghost">
            Submit
          </Button>
        </Field>
      </form>
    </div>
  );
}
