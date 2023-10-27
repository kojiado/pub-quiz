import Button from '@/components/Button';
import Quiz from '@/components/Quiz'
import { useQuizzes } from '@/hooks/useQuizzes';
import Link from 'next/link';
import { plusIcon } from '@/content/icons';

export default async function Home() {
  const quizzes = await useQuizzes();

  return (
    <div className=''>
      <div className='flex flex-col'>
        <div className='flex flex-wrap items-end justify-between gap-[16px] mt-[30px]'>
          <h2 className='text-white text-[30px] font-bold'>Lista svih kvizova</h2>
          <Link href={"/quiz/new"}>
            <Button
              label="Kreiraj novi kviz"
              icon={plusIcon}
              type="primary"
            />
          </Link>
        </div>
        <div className='flex flex-col my-[60px] gap-[10px]'>
          {quizzes.map((quiz) =>(
            <Quiz
              name={quiz.name}
              quizId={quiz.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
