"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FieldChoiceCard } from "@/components/FieldChoiceCard";
import { Loader } from "@/components/Loader";
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
      <Card className="w-full max-w-lg flex flex-col justify-center items-center m-4">
        <FieldChoiceCard
          key={questions.at(questionNum)?.id}
          title={questions.at(questionNum)?.title}
          titleDescription={questions.at(questionNum)?.titleDescription}
          choices={questions.at(questionNum)?.choices}
        />
        <CardFooter className="flex justify-center items-center w-full">
          <Button variant="default" onClick={handleBackButton}>
            Back
          </Button>
          <Button variant="default" onClick={handleNextButton}>
            {questionNum < questions.length - 1 ? "Next" : "Submit"}
          </Button>
        </CardFooter>
        <Progress value={(100 / questions.length) * (questionNum + 1)} />
      </Card>
    </>
  );
}

export { Quiz };
