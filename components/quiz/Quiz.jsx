import Button from "../ui/Button";
import Link from "next/link";
import { playIcon, trashIcon } from "@/utils/icons";

const Quiz = ({name, quizId, deleteQuiz}) => {
  return (  
    <Link href={`/quiz/update/${quizId}`}>
      <div 
        className='flex items-start justify-between bg-[#393536] border-[1px] border-solid border-[#4F4C4D] p-[20px] rounded-[10px] gap-[20px]cursor-pointer hover:bg-[#4F4C4D]'>
        <p className='text-white text-[20px] font-semibold my-auto'>
          {name}
        </p>
        <div className='flex gap-[12px] min-w-fit'>
          <Button 
            type="secondary"
            icon={trashIcon}
            label="Obriši kviz"
            additionalClass="responsive"
            miniButton={true}
            onClickFunction={(e) => {
              e.preventDefault();
              deleteQuiz(name);
            }}
          />
          <Link href={`/quiz/${quizId}`}>
            <Button 
              type="primary"
              icon={playIcon}
              label="Započni kviz"
              additionalClass="responsive"
              miniButton={true}
            />
          </Link>
        </div>
      </div>
    </Link>
  )
}

export default Quiz