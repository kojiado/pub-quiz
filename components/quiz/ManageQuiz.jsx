"use client"

import Input from "@/components/ui/Input"
import NewQuestion from "./NewQuestion"
import Button from "@/components/ui/Button"
import ManageQuizSkeleton from "../skeleton/ManageQuizSkeleton"
import { usePostQuestions } from "@/hooks/usePostQuestions"
import { usePutQuiz } from "@/hooks/usePutQuiz"
import { usePostQuiz } from "@/hooks/usePostQuiz"
import { useQuiz } from "@/hooks/useQuiz"
import { useState, useEffect } from "react"
import { plusIcon, rocketIcon } from "@/utils/icons"
import { useQuestions } from "@/hooks/useQuestions"
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast';

export default function ManageQuiz ({questionsList, requestType, id, quiz, isLoading}) {
  const router = useRouter()
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState([]);
  const oldQuestions = useQuestions();
  const { postQuiz } = usePostQuiz();
  const { putQuiz } = usePutQuiz();
  const { postQuestions } = usePostQuestions();

  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  }

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      question: "",
      answer: "",
    };
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (id) => {
    const updatedQuestions = questions.filter((q) => q.id !== id);
    setQuestions(updatedQuestions);
  };

  const handleQuestionInputChange = (id, field, value) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, [field]: value } : q
    );
    setQuestions(updatedQuestions);
  };

  const addOldQuestion = () => {
    if (oldQuestions.length > 0) {
      const uniqueQuestions = oldQuestions.filter((question) => !isQuestionAlreadyInList(questions, question));
  
      if (uniqueQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * uniqueQuestions.length);
        const randomQuestion = uniqueQuestions[randomIndex];
  
        const newQuestion = {
          id: Date.now(),
          question: randomQuestion.question,
          answer: randomQuestion.answer,
        };
  
        setQuestions([...questions, newQuestion]);
        toast.success("Pitanje reciklirano.");
      }
    }
  }

  const addNewQuestionsForRecycle = () => {
    const newQuestionsForRecycle = questions.filter(
      (question) => !isQuestionAlreadyInList(oldQuestions, question) && !isQuestionEmpty(question)
    );

    postQuestions(newQuestionsForRecycle);
  };

  const isQuestionAlreadyInList = (questionsToCheck, questionToCheck) => {
    return questionsToCheck.some((question) => (
      question.question === questionToCheck.question &&
      question.answer === questionToCheck.answer
    ));
  }

  const isQuestionEmpty = (questionToCheck) => {
    return !questionToCheck.question && !questionToCheck.answer;
  }

  useEffect(() => {
    if(questionsList) {
      setQuestions(questionsList);
    } else {
      setQuestions(quiz?.questions);
      setQuizName(quiz?.name)
    }
  }, [quiz])

  const createQuiz = async (e) => {
    event.preventDefault();
    
    const quizData = {
      name: quizName,
      questions,
    };

    const success = await postQuiz(quizData);

    if (success) {
      await addNewQuestionsForRecycle();
      router.push('/');
      toast.success('Kviz uspješno kreiran.');
    } else {
      toast.error('Kviz nije kreiran, pokušaj ponovo.');
    }
  }

  const updateQuiz = async (quizId) => {
    const quizData = {
      name: quizName,
      questions,
    };

    const success = await putQuiz(quizId, quizData);

    if (success) {
      await addNewQuestionsForRecycle();
      router.push('/');
      toast.success('Promjene na kvizu sačuvane.');
    } else {
      toast.error('Promjene nisu sačuvane, pokušaj ponovo.');
    }
  }

  return isLoading? (
      <ManageQuizSkeleton/>
    ):(
    <div className="flex flex-col gap-[40px]">
      <div className='flex flex-col'>
        <h2 className='text-white text-[22px] font-bold'>
          {requestType === 'Post' ? 'Novi Kviz' : 'Uređivanje kviza'}
        </h2>
        <p className='text-[16px] text-primary_variant_3'>
          {requestType === 'Post' ? 'Popunite formu ispod kako biste unijeli novi kviz.' : 'Uredite podatke kviza prije spremanja.'}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-[16px]">
        <Input 
          type="text"
          label="Ime kviza"
          placeholder="Unesi ime kviza"
          textarea={false}
          additionalClass="w-full sm:max-w-[400px]"
          onChange={handleQuizNameChange}
          value={quizName ? quizName : ''}
        />
        <Button 
          style="secondary"
          label="Recikliraj pitanje"
          onClickFunction={addOldQuestion}
          additionalClass="w-full sm:w-fit"
        />
      </div>
      {questions?.map((question,index) => (
        <NewQuestion
          key={index}
          questionNum={index+1}
          question={question.question}
          answer={question.answer}
          onQuestionChange={(value) => handleQuestionInputChange(question.id, "question", value)}
          onAnswerChange={(value) => handleQuestionInputChange(question.id, "answer", value)}
          deleteQuestion={() => deleteQuestion(question.id)}
        />
      ))}
      <div className="flex flex-col gap-[20px] ss:flex-row justify-between mb-[50px]">
        <Button
          style="secondary"
          label="Dodaj pitanje"
          icon={plusIcon}
          onClickFunction={addQuestion}
          additionalClass="w-full ss:w-fit"
        />
        <Button
          style="primary"
          label={requestType === 'Post' ? 'Kreiraj kviz' : 'Spremi promjene'}
          icon={rocketIcon}
          onClickFunction={requestType === 'Post' ? createQuiz : () => updateQuiz(id)}
          additionalClass="w-full ss:w-fit"
        />
      </div>
    </div>
  )
}