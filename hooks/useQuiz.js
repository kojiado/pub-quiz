"use client"

import { useApiUrl } from './useApiUrl'; // Import the useApiUrl hook
import { useState, useEffect } from 'react';

export function useQuiz(id) {
  const apiUrl = useApiUrl();
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch(`${apiUrl}/quizzes/${id}`);
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
