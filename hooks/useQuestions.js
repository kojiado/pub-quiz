"use client"

import { useState, useEffect } from 'react';

export function useQuestions() {
  const [questionsData, setQuestionsData] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch('http://localhost:3001/questions');
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
