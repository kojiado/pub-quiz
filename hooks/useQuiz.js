export async function useQuiz(id) {
  const res = await fetch(`http://localhost:3001/quizzes/${id}`);
  const quizData = await res.json();
  return quizData;
}