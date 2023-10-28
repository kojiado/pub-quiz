"use client"

import Button from '@/components/Button';
import Quiz from '@/components/Quiz'
import Modal from '@/components/Modal';
import Link from 'next/link';
import { plusIcon } from '@/content/icons';
import { useState, useEffect } from 'react';
import { useDeleteQuiz } from '@/hooks/useDeleteQuiz';

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);

  const [refresher, setRefresher] = useState(true);
  const [currentQuizId, setCurrentQuizId] = useState('');
  const [currentQuizName, setCurrentQuizName] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const {deleteQuiz} = useDeleteQuiz(currentQuizId);

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
    setQuizzes(updatedQuizzes);
    closeDeleteModal();
    setRefresher(!refresher);
  };

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await fetch('http://localhost:3001/quizzes');
        const data = await res.json();
        setQuizzes(data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, [refresher]);

  return (
    <div className=''>
      <Modal isOpen={isDeleteModalOpen} closeModal={closeDeleteModal} modalTitle={currentQuizName}>
        <div className='flex flex-col gap-[60px] justify-center'>
          <p className='text-white text-[20px] font-semibold text-center max-w-[200px] mx-auto py-[20px]'>Da li ste sigurni da želite obrisati kviz?</p>
          <div className='flex gap-[20px]'>
            <Button
              type="secondary"
              label="Poništi"
              additionalClass="w-full"
              onClickFunction={closeDeleteModal}
            />
            <Button
              type="primary"
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
              type="primary"
            />
          </Link>
        </div>
        <div className='flex flex-col my-[60px] gap-[10px]'>
          {quizzes?.map((quiz) =>(
            <Quiz
              name={quiz.name}
              quizId={quiz.id}
              deleteQuiz={() => openDeleteModal(quiz.id,quiz.name)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
