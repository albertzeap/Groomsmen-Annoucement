import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  title: string | undefined;
  titleDescription: string | undefined;
  choices: { id: string; choice: string }[] | undefined;
};

export function FieldChoiceCard({ title, titleDescription, choices }: Props) {
  return (
    <div className="w-full max-w-md m-2">
      <FieldGroup>
        <FieldSet>
          <FieldLabel htmlFor="compute-environment-p8w">{title}</FieldLabel>
          <FieldDescription>{titleDescription}</FieldDescription>
          <RadioGroup defaultValue="kubernetes">
            {choices.map((choice) => (
              <FieldLabel key={choice.id}>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>{choice.id}</FieldTitle>
                    <FieldDescription>{choice.choice}</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value={choice.choice} id={choice.id} />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  );
}
