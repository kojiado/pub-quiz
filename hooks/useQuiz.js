import { useApiUrl } from './useApiUrl'; // Import the useApiUrl hook
import { useState, useEffect } from 'react';

export function useQuiz(id) {
  const apiUrl = useApiUrl();
  const [quiz, setQuiz] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setIsLoading(true); // Set isLoading to true when fetching
        const res = await fetch(`${apiUrl}/quizzes/${id}`);
        const data = await res.json();
        setQuiz(data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      } finally {
        setIsLoading(false); // Set isLoading to false when data is loaded or in case of an error
      }
    };

    fetchQuiz();
  }, [apiUrl, id]); // Include apiUrl and id in the dependency array

  return { quiz, isLoading }; // Return both quizData and isLoading
}

