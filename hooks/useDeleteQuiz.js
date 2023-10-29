import { useState, useEffect } from 'react';
import { useApiUrl } from './useApiUrl'; // Import the useApiUrl hook

export function useDeleteQuiz() {
  const apiUrl = useApiUrl();

  const deleteQuiz = async (id) => {
    try {
      const res = await fetch(`${apiUrl}/quizzes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 204) {
        console.log('Quiz Successfully Deleted');
      } else {
        console.error('Error deleting Quiz:', res.status);
      }
    } catch (error) {
      console.error('Error deleting Quiz:', error);
    }
  };

  return { deleteQuiz };
}
