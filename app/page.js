import Button from '@/components/Button'
import Quiz from '@/components/Quiz'
import { useQuizzes } from '@/hooks/useQuizzes';
import Link from 'next/link';

export default async function Home() {
  const quizzes = await useQuizzes();

  const plusIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path id="add-1_2_" data-name="add-1 (2)" d="M84.68,76.516a1.231,1.231,0,0,0-1.143,1.022c-.011.064-.012.238-.014,2.892l0,2.824-2.852,0a19.638,19.638,0,0,0-3.022.038,1.24,1.24,0,0,0-.869.866,1.474,1.474,0,0,0-.027.482,1.233,1.233,0,0,0,1.022,1.038c.061.011.274.012,2.907.014l2.841,0,0,2.865c0,2.693,0,2.869.014,2.933a1.235,1.235,0,0,0,1.04,1.013,1.834,1.834,0,0,0,.331,0,1.235,1.235,0,0,0,1.038-1.013c.011-.064.012-.24.014-2.933l0-2.865,2.842,0c2.633,0,2.846,0,2.907-.014a1.233,1.233,0,0,0,1.022-1.041,1.474,1.474,0,0,0-.028-.479,1.24,1.24,0,0,0-.869-.866,19.638,19.638,0,0,0-3.022-.038l-2.852,0,0-2.824c0-2.654,0-2.829-.014-2.892a1.229,1.229,0,0,0-1.266-1.022" transform="translate(-76.742 -76.515)" fill="#fff" fillRule="evenodd"/></svg>)

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
