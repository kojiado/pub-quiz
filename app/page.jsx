"use client"

import Button from '@/components/ui/Button';
import Quiz from '@/components/quiz/Quiz'
import Modal from '@/components/ui/Modal';
import Link from 'next/link';
import QuizSkeleton from '@/components/skeleton/QuizSkeleton';
import { useQuizzes } from '@/hooks/useQuizzes';
import { plusIcon } from '@/utils/icons';
import { useState, useEffect } from 'react';
import { useDeleteQuiz } from '@/hooks/useDeleteQuiz';
import { toast, Toaster } from 'react-hot-toast';

export default function Home() {
  const [refresher, setRefresher] = useState(true);
  const { quizzes, isLoading } = useQuizzes(refresher);
  const [currentQuizId, setCurrentQuizId] = useState('');
  const [currentQuizName, setCurrentQuizName] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const {deleteQuiz} = useDeleteQuiz();
  const emptyArray = new Array(5).fill(null);

  const openDeleteModal = (quizId,name) => {
    setIsDeleteModalOpen(true);
    setCurrentQuizId(quizId);
    setCurrentQuizName(name);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setCurrentQuizId('');
    setCurrentQuizName('');
  };

  const handleDeleteQuiz = async () => {
    await deleteQuiz(currentQuizId);
    const updatedQuizzes = quizzes.filter(quiz => quiz.di !== currentQuizId);
    closeDeleteModal();
    setRefresher(!refresher);
    toast.success('Kviz uspješno obrisan.');
  };

  const showLoading = () => {
    toast('hello', { toasterId: 'unique-id-here' });
  }

  return (
    <div className=''>
      <Modal isOpen={isDeleteModalOpen} closeModal={closeDeleteModal} modalTitle={currentQuizName}>
        <div className='flex flex-col gap-[60px] justify-center'>
          <p className='text-white text-[20px] font-semibold text-center max-w-[200px] mx-auto py-[20px]'>Da li ste sigurni da želite obrisati kviz?</p>
          <div className='flex gap-[20px]'>
            <Button
              style="secondary"
              label="Poništi"
              additionalClass="w-full"
              onClickFunction={closeDeleteModal}
            />
            <Button
              style="primary"
              label="Obriši"
              additionalClass="w-full"
              onClickFunction={handleDeleteQuiz}
            />
          </div>
        </div>
      </Modal>
      <div className='flex flex-col'>
        <div className='flex flex-col ss:flex-row items-start ss:items-end justify-between gap-[16px]'>
          <div className='flex flex-col'>
            <h2 className='text-white text-[22px] font-bold'>Kvizovi</h2>
            <p className='text-[16px] text-primary_variant_3'>Ispod možete pronaći listu svih kvizova</p>
          </div>
          <Link className='w-full ss:w-fit' href={"/quiz/new"}>
            <Button
              label="Kreiraj novi kviz"
              icon={plusIcon}
              style="primary"
            />
          </Link>
        </div>
        <div className='flex flex-col my-[60px] gap-[10px]'>
          {isLoading ? (
            emptyArray.map((quiz) =>(
              <QuizSkeleton/>
            ))
          ):(
            quizzes?.map((quiz,index) =>(
              <Quiz
                key={index}
                name={quiz.name}
                quizId={quiz.id}
                deleteQuiz={() => openDeleteModal(quiz.id,quiz.name)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
