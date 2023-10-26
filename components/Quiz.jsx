import MiniButton from "./MiniButton";
import Link from "next/link";

const Quiz = (props) => {
  const {name,quizId} = props;

  const playIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="12.146" height="14" viewBox="0 0 12.146 14"><g id="button-play--button-television-buttons-movies-play-tv-video-controls" transform="translate(-0.936 -0.02)"><path id="Union" d="M2.679.02a1.742,1.742,0,0,0-.846.218,1.642,1.642,0,0,0-.9,1.435V12.366a1.642,1.642,0,0,0,.9,1.435,1.743,1.743,0,0,0,1.72-.016L12.2,8.439a1.612,1.612,0,0,0,0-2.88L3.552.253A1.743,1.743,0,0,0,2.679.02Z" transform="translate(0 0)" fill="#fff" fillRule="evenodd"/></g></svg>)
  const trashIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="13.998" viewBox="0 0 13.5 13.998"><g id="recycle-bin-2--remove-delete-empty-bin-trash-garbage" transform="translate(-0.25 -0.002)"><path id="Subtract" d="M5.763,2.013a1.75,1.75,0,0,1,2.914.737H5.323a1.75,1.75,0,0,1,.44-.737ZM3.789,2.75a3.25,3.25,0,0,1,6.422,0H13a.75.75,0,1,1,0,1.5H12V12.5A1.5,1.5,0,0,1,10.5,14h-7A1.5,1.5,0,0,1,2,12.5V4.25H1a.75.75,0,1,1,0-1.5ZM5,5.876a.625.625,0,0,1,.625.625v4a.625.625,0,0,1-1.25,0v-4A.625.625,0,0,1,5,5.876ZM9.625,6.5a.625.625,0,0,0-1.25,0v4a.625.625,0,0,0,1.25,0Z" fill="#919191" fillRule="evenodd"/></g></svg>)
  
  return (
    <div 
      className='
        flex
        items-start
        justify-between
        bg-[#393536]
        border-[1px]
        border-solid
        border-[#4F4C4D]
        p-[20px]
        rounded-[10px]
        gap-[20px]
        cursor-pointer
        hover:bg-[#4F4C4D]
        '
      >
      <p className='text-white text-[20px] font-semibold my-auto'>
        {name}
      </p>
      <div className='flex gap-[12px] min-w-fit'>
        <MiniButton 
          type="secondary"
          icon={trashIcon}
          label="Obriši kviz"
          additionalClass="responsive"
        />
        <Link href={`/quiz/${quizId}`}>
          <MiniButton 
            type="primary"
            icon={playIcon}
            label="Započni kviz"
            additionalClass="responsive"
          />
        </Link>
      </div>
    </div>
  )
}

export default Quiz