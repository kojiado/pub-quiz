"use client"

import Input from "@/components/Input"
import NewQuestion from "../components/NewQuestion"
import Button from "@/components/Button"
import { useState, useEffect } from "react"
import { plusIcon, rocketIcon } from "@/content/icons"
import { useQuestions } from "@/hooks/useQuestions"
import { useRouter } from 'next/navigation'

export default function ManageQuiz ({questionsList, requestType, id, name}) {
  const router = useRouter()
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState([]);
  const oldQuestions = useQuestions();

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
        console.log(randomQuestion);
      }
    }
  }

  const isQuestionAlreadyInList = (questionsToCheck, questionToCheck) => {
    return questionsToCheck.some((question) => (
      question.question === questionToCheck.question &&
      question.answer === questionToCheck.answer
    ));
  }

  const addNewQuestionsForRecycle = () => {
    const newQuestionsForRecycle = questions.filter(
      (question) => !isQuestionAlreadyInList(oldQuestions, question) && !isQuestionEmpty(question)
    );

    newQuestionsForRecycle.forEach(async (question) => {
      const newQuestion = {
        question: question.question,
        answer: question.answer,
      };
      try {
        const res = await fetch("http://localhost:3001/questions", {
          method: "POST",
          body: JSON.stringify(newQuestion),
          headers: {
            "content-type": "application/json",
          },
        });
        if (res.ok) {
          console.log("Question added to old questions list");
          setOldQuestions([...oldQuestions, question]);
        } else {
          console.log("Failed to add question to old questions list");
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  const isQuestionEmpty = (questionToCheck) => {
    return !questionToCheck.question && !questionToCheck.answer;
  }


  useEffect(() => {
    setQuestions(questionsList);
    setQuizName(name);
  }, [questionsList,name])


  const createQuiz = async (e) => {
    e.preventDefault()
    const quizData = {
      name: quizName,
      questions,
    };

    try {
      const res = await fetch('http://localhost:3001/quizzes',{
        method: 'POST',
        body: JSON.stringify(quizData),
        headers: {
          'content-type': 'application/json'
        }
      })
      console.log(res)
      if(res.ok){
        await addNewQuestionsForRecycle();
        router.push('/');
      }else{
        console.log("Oops! Something is wrong.")
      }
    } catch (error) {
        console.log(error)
    }
  }

  const updateQuiz = async (quizId) => {
    const quizData = {
      name: quizName,
      questions,
    };

    try {
      const res = await fetch(`http://localhost:3001/quizzes/${quizId}`,{
        method: 'PUT',
        body: JSON.stringify(quizData),
        headers: {
          'content-type': 'application/json'
        }
      })
      console.log(res)
      if(res.ok){
        await addNewQuestionsForRecycle();
        router.push('/');
      }else{
        console.log("Oops! Something is wrong.")
      }
    } catch (error) {
        console.log(error)
    }
  }

  return (
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
          value={quizName}
        />
        <Button 
          type="secondary"
          label="Recikliraj pitanje"
          onClickFunction={addOldQuestion}
          additionalClass="w-full sm:w-fit"
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
          label={requestType === 'Post' ? 'Kreiraj kviz' : 'Spremi promjene'}
          icon={rocketIcon}
          onClickFunction={requestType === 'Post' ? createQuiz : () => updateQuiz(id)}
          additionalClass="w-full ss:w-fit"
        />
      </div>
    </div>
  )
}