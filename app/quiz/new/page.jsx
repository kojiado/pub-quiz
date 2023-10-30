import CreateQuiz from "@/components/quiz/CreateQuiz";

export const metadata = {
  title: 'Novi Kviz',
  description: "Novi kviz"
}

export default async function Page() {
  return (
    <CreateQuiz/>
  )
}
