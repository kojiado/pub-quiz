"use client"

import { useState } from "react";

const Modal = ({isOpen, closeModal, children, modalTitle}) => {
  if (!isOpen) return null;

  return (
    <div className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-[40px] min-w-[400px] bg-primary_variant_1 fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] p-[28px] shadow-[0px_0px_20px_rgba(0,0,0,0.3)] rounded-[20px]`}>
      <div className='flex justify-between items-center'>
        <h4 className='text-white text-[16px] font-semibold underline'>{modalTitle}</h4>
        <div onClick={closeModal} className='flex w-[50px] h-[50px] items-center justify-center rounded-full border-[1px] border-solid border-primary_variant_3 cursor-pointer hover:bg-primary_variant_2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22.627" height="22.627" viewBox="0 0 22.627 22.627">
            <path id="add-1_2_" data-name="add-1 (2)" d="M84.68,76.516a1.231,1.231,0,0,0-1.143,1.022c-.011.064-.012.238-.014,2.892l0,2.824-2.852,0a19.638,19.638,0,0,0-3.022.038,1.24,1.24,0,0,0-.869.866,1.474,1.474,0,0,0-.027.482,1.233,1.233,0,0,0,1.022,1.038c.061.011.274.012,2.907.014l2.841,0,0,2.865c0,2.693,0,2.869.014,2.933a1.235,1.235,0,0,0,1.04,1.013,1.834,1.834,0,0,0,.331,0,1.235,1.235,0,0,0,1.038-1.013c.011-.064.012-.24.014-2.933l0-2.865,2.842,0c2.633,0,2.846,0,2.907-.014a1.233,1.233,0,0,0,1.022-1.041,1.474,1.474,0,0,0-.028-.479,1.24,1.24,0,0,0-.869-.866,19.638,19.638,0,0,0-3.022-.038l-2.852,0,0-2.824c0-2.654,0-2.829-.014-2.892a1.229,1.229,0,0,0-1.266-1.022" transform="translate(11.153 -108.369) rotate(45)" fill="#fff" fill-rule="evenodd"/>
          </svg>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Modal