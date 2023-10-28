import ManageQuiz from "@/pages/ManageQuiz"

export default async function Page() {
  const questionList = generateEmptyQuestionsList();

  return (
    <ManageQuiz
      questionsList={questionList}
      requestType="Post"
    />
  )
}

function generateEmptyQuestionsList() {
  const emptyQuestionsList = [];

  for (let i = 1; i <= 15; i++) {
    const newQuestion = {
      id: Date.now() + i,
      question: "",
      answer: "",
    };

    emptyQuestionsList.push(newQuestion);
  }

  return emptyQuestionsList;
}