import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
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
          <FieldLabel className="text-lg">{title}</FieldLabel>
          <FieldDescription className="text-md">
            {titleDescription}
          </FieldDescription>
          {/* <FieldContent className="w-full max-w-sm mx-auto py-2"> */}
          {/*   <img */}
          {/*     src="/unicorn-detective.png" */}
          {/*     alt="Retro Folder" */}
          {/*     title="Picture of Retro-Themed Folder Mascot" */}
          {/*     className="relative z-20 aspect-square w-full object-cover" */}
          {/*   /> */}
          {/* </FieldContent> */}
          <RadioGroup>
            {choices?.map((choice) => (
              <FieldLabel key={choice.id}>
                <Field orientation="horizontal">
                  <FieldContent className="p-1">
                    <FieldTitle className="text-md font-bold py-2">
                      {choice.id}
                    </FieldTitle>
                    <FieldDescription>{choice.choice}</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem
                    className="w-5 h-5"
                    value={choice.choice}
                    id={choice.id}
                  />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  );
}
