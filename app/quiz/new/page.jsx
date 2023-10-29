import ManageQuiz from "@/components/quiz/ManageQuiz"
import useEmptyQuestionsList from "@/hooks/useEmptyQuestionsList";

export const metadata = {
  title: 'Novi Kviz',
  description: "Novi kviz"
}

export default async function Page() {
  const questionList = useEmptyQuestionsList();

  return (
    <ManageQuiz
      questionsList={questionList}
      requestType="Post"
    />
  )
}
