import Button from "../ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { playIcon, trashIcon } from "@/utils/icons";

const Quiz = ({name, quizId, deleteQuiz, key}) => {
  const router = useRouter()

  return (  
    <div key={key} onClick={() => router.push(`/quiz/update/${quizId}`)} 
      className='flex items-start justify-between cursor-pointer bg-[#393536] border-[1px] border-solid border-[#4F4C4D] p-[20px] rounded-[10px] gap-[20px]cursor-pointer hover:bg-[#4F4C4D]'>
      <p className='text-white text-[20px] font-semibold my-auto'>
        {name}
      </p>
      <div className='flex gap-[12px] min-w-fit'>
        <Button 
          style="secondary"
          icon={trashIcon}
          label="Obriši kviz"
          additionalClass="responsive"
          miniButton={true}
          onClickFunction={(e) => {
            e.stopPropagation();
            e.preventDefault();
            deleteQuiz(name);
          }}
        />
        <Button 
          style="primary"
          icon={playIcon}
          label="Započni kviz"
          additionalClass="responsive"
          miniButton={true}
          onClickFunction={(e) => {
            e.stopPropagation();
            router.push(`/quiz/${quizId}`);
          }}
        />
      </div>
    </div>
  )
}

export default Quiz