"use client"

import { useState, useEffect } from 'react';

export function useQuizzes(refresher) {
  const [quizzes, setQuizzes] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch(`http://localhost:3001/quizzes/`);
        const data = await res.json();
        setQuizzes(data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };

    fetchQuiz();
  }, [refresher]);

  return quizzes;
}
