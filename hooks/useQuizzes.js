import { useApiUrl } from './useApiUrl'; // Import the useApiUrl hook
import { useState, useEffect } from 'react';

export function useQuizzes(refresher) {
  const apiUrl = useApiUrl();
  const [quizzes, setQuizzes] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setIsLoading(true); // Set isLoading to true when fetching
        const res = await fetch(`${apiUrl}/quizzes/`);
        const data = await res.json();
        setQuizzes(data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      } finally {
        setIsLoading(false); // Set isLoading to false when data is loaded or in case of an error
      }
    };

    fetchQuiz();
  }, [refresher]);

  return { quizzes, isLoading }; // Return both quizzes and isLoading
}
