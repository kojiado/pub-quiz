import QuizSlideshow from "@/components/quiz/QuizSlideshow";

export async function generateMetadata({ params }, parent) {
  const id = params.id
  const quiz = await fetch(`http://localhost:3001/quizzes/${id}`).then((res) => res.json())
 
  return {
    title: `Kviz - ${quiz.name}`,
    description: `Kviz - ${quiz.name}`
  }
}

export default async function Quiz({ params }) {
  const id = params.id;

  return (
    <QuizSlideshow
      id={id}
    />
  )
}
