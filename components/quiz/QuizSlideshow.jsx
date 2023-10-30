"use client"

import { useRef, useState, useEffect } from 'react';
import { useQuiz } from "@/hooks/useQuiz";

import Question from '@/components/quiz/Question';
import Button from '@/components/ui/Button';
import { Suspense } from 'react';

import { Splide, SplideSlide, } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function QuizSlideshow({id}) {
  const currentQuiz = useQuiz(id);
  const splideRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;

      if (splideInstance) {
        setTotalSlides(splideInstance.length);

        splideInstance.on('move', () => {
          setCurrentSlideIndex(splideInstance.index);
        });
      }
    }
  }, []);

  const goToNextSlide = () => {
    splideRef.current.splide.go('+1');
  };

  const goToPrevSlide = () => {
    splideRef.current.splide.go('-1');
  };

  useEffect(() => {
    setTotalSlides(currentQuiz?.questions.length);
  }, [currentQuiz])

  return (
    <>
      <div className="flex flex-col gap-[60px] pb-[160px]">
        <h2 className='text-white text-[20px] underline'>Kviz: <span className="font-bold">{currentQuiz?.name}</span></h2>
        <Splide
          ref={splideRef}
          options={{
            pagination: false,
            gap: 30,
            arrows: false,
            drag: false,
          }}
        >
          {currentQuiz?.questions?.map((question,index)=>(
            <Question
              question={question.question}
              answer={question.answer}
              questionNum={index+1}
            />
          ))}
        </Splide>
      </div>
      <div className='w-full h-auto p-[20px] backdrop-blur-md bg-[rgba(255,255,255,0.05)] fixed left-0 bottom-0 border-b-[1px] border-t-[1px] border-solid border-[#4F4C4D] flex items-center justify-between'>
        <Button
          style="secondary"
          label="Prethodno pitanje"
          onClickFunction={goToPrevSlide}
          additionalClass={currentSlideIndex === 0 ? 'disabled' : '' }
        />
        <Button
          style="primary"
          label="Sledeće pitanje"
          onClickFunction={goToNextSlide}
          additionalClass={currentSlideIndex === totalSlides - 1 ? 'disabled' : '' }
        />
      </div>
    </>
  )
}