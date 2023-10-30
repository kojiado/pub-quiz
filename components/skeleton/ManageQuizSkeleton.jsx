import React from 'react'

const ManageQuizSkeleton = () => {
  return (
    <div className="flex flex-col gap-[40px] w-full h-full">
      <div className='flex flex-col gap-[12px]'>
        <div className='h-[28px] w-[80px] underline skeleton rounded-[4px]'></div>
        <div className='h-[16px] w-[130px] underline skeleton rounded-[4px]'></div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-[16px] w-full">
        <div className="flex flex-col gap-[12px] w-full">
          <div className='h-[18px] w-[60px] rounded-[4px] skeleton'></div>
          <div className='skeleton h-[52px] w-full xsm:w-[250px] rounded-[10px]'></div>
        </div>
        <div className='h-[53.6px] w-full xsm:w-[180px] skeleton rounded-[10px]'/>
      </div>

      <div className='flex flex-col gap-[20px] p-[20px] rounded-[20px] bg-primary_variant_dark w-full'>
        <div className='flex justify-between w-full'>
          <div className='skeleton w-[30px] h-[36px] rounded-[10px]'/>
          <div className='w-[150px] flex h-[42px] rounded-[10px] skeleton-2 gap-[12px] items-center justify-center'>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[20px] w-full">
          <div className='w-full flex flex-col gap-[12px]'>
            <div className='h-[34px] w-[85px] skeleton rounded-[10px]'/>
            <div className='h-[200px] w-full skeleton rounded-[20px]'/>
          </div>
          <div className='w-full flex flex-col gap-[12px]'>
            <div className='h-[34px] w-[85px] skeleton rounded-[10px]'/>
            <div className='h-[200px] w-full skeleton rounded-[20px]'/>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[20px] ss:flex-row justify-between mb-[50px] w-full">
        <div className='h-[53.6px] w-full ss:w-[180px] skeleton rounded-[10px]'/>
        <div className='h-[53.6px] w-full ss:w-[180px] skeleton rounded-[10px]'/>
      </div>
    </div>
  )
}

export default ManageQuizSkeleton