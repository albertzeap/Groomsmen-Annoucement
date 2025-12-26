"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FieldChoiceCard } from "@/components/FieldChoiceCard";
import { Progress } from "@/components/ui/progress";
import { questions } from "@/data/questions";

function Quiz() {
  const [questionNum, setQuestionNum] = useState(0);

  console.log(questionNum);
  return (
    <>
      {/* <div className="m-2">Question Number: {questionNum + 1} </div> */}

      <FieldChoiceCard
        key={questions.at(questionNum)?.id}
        title={questions.at(questionNum)?.title}
        titleDescription={questions.at(questionNum)?.titleDescription}
        choices={questions.at(questionNum)?.choices}
      />
      <div className="flex justify-center items-center w-full m-2">
        <Button
          variant="default"
          onClick={() => setQuestionNum((prevNum) => Math.max(0, prevNum - 1))}
        >
          Back
        </Button>
        <Button
          variant="default"
          onClick={() =>
            setQuestionNum((prevNum) =>
              Math.min(questions.length - 1, prevNum + 1),
            )
          }
        >
          Next
        </Button>
      </div>
      <Progress value={(100 / questions.length) * (questionNum + 1)} />
    </>
  );
}

export { Quiz };
