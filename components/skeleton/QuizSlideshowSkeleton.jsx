const QuizSlideshowSkeleton = () => {
  return (
    <div className="flex flex-col gap-[60px] pb-[160px]">
      <div className='h-[28px] w-[120px] underline skeleton rounded-[4px]'></div>
      <div className='flex flex-col gap-[60px]'>
        <div className='flex flex-col gap-[20px]'>
          <p className='skeleton h-[34px] w-[160px] rounded-[10px] skeleton'></p>
          <p className='rounded-[4px] max-w-[200px] h-[24px] skeleton'></p>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <p className='skeleton h-[34px] w-[160px] rounded-[10px] skeleton'></p>
          <div className='w-full h-[150px] rounded-[10px] skeleton'></div>
          <div className="ml-auto rounded-[10px] h-[42px] w-[150px] skeleton"/>
        </div>
      </div>
    </div>
  )
}

export default QuizSlideshowSkeleton