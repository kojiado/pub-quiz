import ManageQuiz from "@/components/quiz/ManageQuiz"
import CreateEmptyQuestions from "@/lib/CreateEmptyQuestions";

export const metadata = {
  title: 'Novi Kviz',
  description: "Novi kviz"
}

export default async function Page() {
  const questionList = CreateEmptyQuestions();

  return (
    <ManageQuiz
      questionsList={questionList}
      requestType="Post"
    />
  )
}
