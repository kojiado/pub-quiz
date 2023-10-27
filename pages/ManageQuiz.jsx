"use client"

import Input from "@/components/Input"
import NewQuestion from "../components/NewQuestion"
import Button from "@/components/Button"
import { useState, useEffect } from "react"
import { plusIcon, rocketIcon } from "@/content/icons"
import { useQuestions } from "@/hooks/useQuestions"


export default function ManageQuiz ({questionsList}) {
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [oldQuestions, setOldQuestions] = useState([]);

  /* QUIZ NAME */

  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  }

  /* QUIZ QUESTIONS MANAGER */

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
   
  /* RECYCLING OLD QUESTIONS */

  const addOldQuestion = () => {
    if (oldQuestions.length > 0) {
      const uniqueQuestions = oldQuestions.filter((question) => !isQuestionAlreadyInList(question));
  
      if (uniqueQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * uniqueQuestions.length);
        const randomQuestion = uniqueQuestions[randomIndex];
  
        const newQuestion = {
          id: Date.now(),
          question: randomQuestion.question,
          answer: randomQuestion.answer,
        };
  
        setQuestions([...questions, newQuestion]);
        console.log(randomQuestion);
      }
    }
  }

  const isQuestionAlreadyInList = (questionToCheck) => {
    return questions.some((question) => (
      question.question === questionToCheck.question &&
      question.answer === questionToCheck.answer
    ));
  }

  const fetchOldQuestions = async () => {
    const oldQuestionsData = await useQuestions();
    setOldQuestions(oldQuestionsData);
  }

  useEffect(() => {
    fetchOldQuestions();
    setQuestions(questionsList);
  }, [])

  /* QUIZ MANAGE DONE */

  const createQuiz = () => {
    const quizData = {
      id: Date.now(),
      name: quizName,
      questions,
    };

    console.log(quizData);
  };

  return (
    <div className="flex flex-col gap-[40px]">
      <h2 className='text-white text-[30px] font-bold'>Novi kviz</h2>
      <div className="flex flex-col ss:flex-row justify-between items-center gap-[40px]">
        <Input 
          type="text"
          label="Ime kviza"
          placeholder="Unesi ime kviza"
          textarea={false}
          additionalClass="w-full ss:max-w-[400px]"
          onChange={handleQuizNameChange}
        />
        <Button 
          type="secondary"
          label="Recikliraj pitanje"
          onClickFunction={addOldQuestion}
          additionalClass="w-full ss:w-fit"
        />
      </div>
      {questions?.map((question, index) => (
        <NewQuestion
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
          type="secondary"
          label="Dodaj pitanje"
          icon={plusIcon}
          onClickFunction={addQuestion}
          additionalClass="w-full ss:w-fit"
        />
        <Button
          type="primary"
          label="Kreiraj kviz"
          icon={rocketIcon}
          onClickFunction={createQuiz}
          additionalClass="w-full ss:w-fit"
        />
      </div>
    </div>
  )
}