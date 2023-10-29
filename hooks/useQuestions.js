"use client"

import { useApiUrl } from './useApiUrl'; // Import the useApiUrl hook
import { useState, useEffect } from 'react';

export function useQuestions() {
  const apiUrl = useApiUrl();
  const [questionsData, setQuestionsData] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(`${apiUrl}/questions`);
        const data = await res.json();
        setQuestionsData(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return questionsData;
}
