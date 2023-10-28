
import { useQuiz } from "@/hooks/useQuiz";

const getQuiz = ({id}) => {
  return useQuiz(id);
}

export default getQuiz