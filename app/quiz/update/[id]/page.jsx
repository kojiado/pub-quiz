import ManageQuiz from "@/components/quiz/ManageQuiz";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id
  const quiz = await fetch(`http://localhost:3001/quizzes/${id}`).then((res) => res.json())
 
  return {
    title: `Uređivanje - ${quiz.name}`,
    description: `Uređivanje - ${quiz.name}`
  }
}

export default function Update({ params }) {
  const id = params.id;

  return (
    <ManageQuiz
      requestType="Put"
      id={id}
    />
  )
}
