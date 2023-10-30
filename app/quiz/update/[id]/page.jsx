import UpdateQuiz from "@/components/quiz/UpdateQuiz";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id
  const quiz = await fetch(`http://localhost:3001/quizzes/${id}`).then((res) => res.json())
 
  return {
    title: `Uređivanje - ${quiz.name}`,
    description: `Uređivanje - ${quiz.name}`
  }
}

export default async function Update({ params }) {
  const id = params.id;

  return (
    <UpdateQuiz
      id={id}
    />
  )
}
