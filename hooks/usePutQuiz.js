import { useState } from 'react';
import { useApiUrl } from './useApiUrl'; // Import the useApiUrl hook

export function usePutQuiz() {
  const apiUrl = useApiUrl();

  const putQuiz = async (quizId, quizData) => {
    try {
      const res = await fetch(`${apiUrl}/quizzes/${quizId}`, {
        method: 'PUT',
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
      console.error('Error updating quiz:', error);
      return false;
    }
  };

  return { putQuiz };
}
