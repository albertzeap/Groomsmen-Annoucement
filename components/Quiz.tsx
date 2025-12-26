"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FieldChoiceCard } from "@/components/FieldChoiceCard";

function Quiz() {
  const [questionNum, setQuestionNum] = useState(0);
  console.log(questionNum);
  return (
    <>
      <div>Question Number: {questionNum} </div>
      <FieldChoiceCard />
      <div className="flex">
        <Button
          onClick={() => setQuestionNum((prevNum) => Math.max(0, prevNum - 1))}
        >
          Back
        </Button>
        <Button onClick={() => setQuestionNum((prevNum) => prevNum + 1)}>
          Next
        </Button>
      </div>
    </>
  );
}

export { Quiz };
