"use client"

import { useState, useEffect } from 'react';

export function useQuiz(id) {
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch(`http://localhost:3001/quizzes/${id}`);
        const data = await res.json();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };

    fetchQuiz();
  }, []);

  return quizData;
}
