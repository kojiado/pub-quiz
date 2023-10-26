import { SplideSlide } from '@splidejs/react-splide';
import { useState } from 'react';
import MiniButton from './MiniButton';

const Question = (props) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const {question, answer, questionNum} = props;

  const eyeIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="19.6" height="14" viewBox="0 0 19.6 14"><g id="visible--eye-eyeball-open-view" transform="translate(0 -2)"><path id="Subtract" d="M4.106,4.087A9.9,9.9,0,0,1,9.8,2a9.915,9.915,0,0,1,5.694,2.087A19.9,19.9,0,0,1,19.078,7.5l.007.007a2.423,2.423,0,0,1,0,2.988l-.007.007a19.9,19.9,0,0,1-3.584,3.412A9.9,9.9,0,0,1,9.8,16a9.923,9.923,0,0,1-5.694-2.086A20,20,0,0,1,.522,10.5l-.007-.007a2.421,2.421,0,0,1,0-2.986L.522,7.5A19.9,19.9,0,0,1,4.106,4.087ZM9.8,12.15A3.15,3.15,0,1,0,6.65,9,3.15,3.15,0,0,0,9.8,12.15Z" transform="translate(0)" fill="#fff" fill-rule="evenodd"/></g></svg>)

  const showAnswer = () => {
    setIsAnswerVisible(true);
  }
  
  return (
    <SplideSlide>
      <div className='flex flex-col gap-[60px]'>
        <div className='flex flex-col gap-[20px]'>
          <p className='bg-[#5B89A7] rounded-[10px] text-white font-semibold text-[16px] p-[5px_16px] w-fit'>Pitanje broj {questionNum}</p>
          <p className='text-[20px] text-white'>{question}</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <p className='bg-[#F57E3A] rounded-[10px] text-white font-semibold text-[16px] p-[5px_16px] w-fit'>Odgovor na pitanje broj {questionNum}</p>
          <div className='answer'>
            <p>{isAnswerVisible ? answer : 'Nema cheatovanja :)'}</p>
            <div className={`overlay ${isAnswerVisible ? 'hidden' : 'block'}`}></div>
          </div>
          <MiniButton
            type="primary"
            label="Otkrij odgovor"
            icon={eyeIcon}
            additionalClass={`ml-auto ${isAnswerVisible ? 'disabled' : ''}`}
            onClickFunction={showAnswer}
          />
        </div>
      </div>
    </SplideSlide>
  )
}

export default Question