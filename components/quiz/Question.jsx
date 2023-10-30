import { SplideSlide } from '@splidejs/react-splide';
import { useState } from 'react';
import Button from '../ui/Button';
import { eyeIcon } from '@/utils/icons';

const Question = ({question, answer, questionNum}) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const showAnswer = () => {
    setIsAnswerVisible(true);
  }
  
  return (
    <SplideSlide>
      <div className='flex flex-col gap-[60px]'>
        <div className='flex flex-col gap-[20px]'>
          <p className='question-title'>Pitanje broj {questionNum}</p>
          <p className='text-[20px] text-white'>{question}</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <p className='answer-title'>Odgovor na pitanje broj {questionNum}</p>
          <div className='answer'>
            <p>{isAnswerVisible ? answer : 'Nema cheatovanja :)'}</p>
            <div className={`overlay ${isAnswerVisible ? 'hidden' : 'block'}`}></div>
          </div>
          <Button
            style="primary"
            label="Otkrij odgovor"
            icon={eyeIcon}
            additionalClass={`ml-auto ${isAnswerVisible ? 'disabled' : ''}`}
            onClickFunction={showAnswer}
            miniButton={true}
          />
        </div>
      </div>
    </SplideSlide>
  )
}

export default Question