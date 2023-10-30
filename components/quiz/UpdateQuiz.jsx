"use client"

import ManageQuiz from "./ManageQuiz";
import { useQuiz } from "@/hooks/useQuiz";

export default function UpdateQuiz({id}) {
  const {quiz, isLoading} = useQuiz(id);

  return (
    <ManageQuiz
      quiz={quiz}
      isLoading={isLoading}
      requestType="Put"
      id={id}
    />
  )
}