export async function useQuestions() {
  const res = await fetch(`http://localhost:3001/questions`);
  const questionsData = await res.json();
  return questionsData;
}
