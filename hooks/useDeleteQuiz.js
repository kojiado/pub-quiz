import { useState, useEffect } from 'react';

export function useDeleteQuiz() {
  const deleteQuiz = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/quizzes/${id}`, {
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
