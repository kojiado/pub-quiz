export async function useQuizzes() {
  const res = await fetch(`http://localhost:3001/quizzes`);
  const quizzesData = await res.json();
  return quizzesData;
}
