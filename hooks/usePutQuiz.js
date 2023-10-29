import { useState } from 'react';

export function usePutQuiz() {
  const putQuiz = async (quizId, quizData) => {
    try {
      const res = await fetch(`http://localhost:3001/quizzes/${quizId}`, {
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
