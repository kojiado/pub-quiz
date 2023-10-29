import { useState } from 'react';

export function usePostQuiz() {
  const postQuiz = async (quizData) => {
    try {
      const res = await fetch('http://localhost:3001/quizzes', {
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
