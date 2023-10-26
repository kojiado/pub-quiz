import { useQuiz } from "@/hooks/useQuiz";
import QuizSlider from "@/components/QuizSlider";

export default async function Page({ params }) {
  const id = params.id;
  const quizData = await useQuiz(id);

  return (
    <div>
      <QuizSlider
        quizData={quizData}
      />
    </div>
  )
}