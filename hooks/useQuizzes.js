"use client"

import { useApiUrl } from './useApiUrl'; // Import the useApiUrl hook
import { useState, useEffect } from 'react';

export function useQuizzes(refresher) {
  const apiUrl = useApiUrl();
  const [quizzes, setQuizzes] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch(`${apiUrl}/quizzes/`);
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
