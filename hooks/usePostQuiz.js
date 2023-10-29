import { useState } from 'react';
import { useApiUrl } from './useApiUrl'; // Import the useApiUrl hook

export function usePostQuiz() {
  const apiUrl = useApiUrl();

  const postQuiz = async (quizData) => {
    try {
      const res = await fetch(`${apiUrl}/quizzes`, {
        method: 'POST',
        body: JSON.stringify(quizData),
        headers: {
          'content-type': 'application/json'
        }
      });
      if (res.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error creating quiz:', error);
      return false;
    }
  };

  return { postQuiz };
}
