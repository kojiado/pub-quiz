export default function useEmptyQuestionsList() {
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