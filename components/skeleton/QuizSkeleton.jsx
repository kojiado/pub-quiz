import React from 'react'

const QuizSkeleton = ({key}) => {
  return (
    <div key={key} className='flex h-[73.6px] xsm:h-[85.2px] w-full items-center justify-between skeleton p-[20px] rounded-[10px] gap-[20px]'>
      <div className='max-w-[150px] w-[100px] h-[24px] rounded-full skeleton-2'></div>
      <div className='flex gap-[12px] min-w-fit'>
        <div className='w-[32px] xsm:w-[150px] flex h-[32px] xsm:h-[42px] rounded-[10px] skeleton-2 gap-[12px] items-center justify-center'>
        </div>
        <div className='w-[32px] xsm:w-[150px] flex h-[32px] xsm:h-[42px] rounded-[10px] skeleton-2 gap-[12px] items-center justify-center'>
        </div>
      </div>
    </div>
  )
}

export default QuizSkeleton