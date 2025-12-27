"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FieldChoiceCard } from "@/components/FieldChoiceCard";
import { Progress } from "@/components/ui/progress";
import { questions } from "@/data/questions";

function Quiz() {
  const [questionNum, setQuestionNum] = useState(0);
  const router = useRouter();

  const handleNextButton = () => {
    if (questionNum == questions.length - 1) {
      router.push("/evaluating");
    } else {
      setQuestionNum((prevNum) => Math.min(questions.length - 1, prevNum + 1));
    }
  };

  const handleBackButton = () => {
    if (questionNum == 0) {
      router.push("/");
    } else {
      setQuestionNum((prevNum) => Math.max(0, prevNum - 1));
    }
  };

  return (
    <>
      <Card className="w-full max-w-lg flex flex-col justify-center items-center m-4 shadow-md p-4">
        <FieldChoiceCard
          key={questions.at(questionNum)?.id}
          title={questions.at(questionNum)?.title}
          titleDescription={questions.at(questionNum)?.titleDescription}
          choices={questions.at(questionNum)?.choices}
        />
        <CardFooter className="flex justify-center items-center w-full gap-4">
          <Button
            className="active:bg-black hover:bg-black"
            variant="default"
            onClick={handleBackButton}
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button
            className="active:bg-black hover:bg-black"
            variant="default"
            onClick={handleNextButton}
          >
            {questionNum < questions.length - 1 ? "Next" : "Submit"}
            <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4 ml-2" />
          </Button>
        </CardFooter>
        <Progress value={(100 / questions.length) * (questionNum + 1)} />
      </Card>
    </>
  );
}

export { Quiz };
