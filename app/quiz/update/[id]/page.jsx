"use client"

import ManageQuiz from "@/pages/ManageQuiz";
import { useQuiz } from "@/hooks/useQuiz";

export default function Update({ params }) {
  const id = params.id;
  const quiz = useQuiz(id);

  console.log(quiz);

  return (
    <ManageQuiz
      questionsList={quiz?.questions}
      requestType="Put"
      id={id}
      name={quiz?.name}
    />
  )
}
