"use client"

import ManageQuiz from "./ManageQuiz";
import CreateEmptyQuestions from "@/lib/CreateEmptyQuestions";

export default function CreateQuiz() {
  const questionList = CreateEmptyQuestions();

  return (
    <ManageQuiz
      requestType="Post"
      questionsList={questionList}
    />
  )
}