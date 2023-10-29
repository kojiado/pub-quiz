import { useState } from 'react';
import { useApiUrl } from './useApiUrl'; // Import the useApiUrl hook

export function usePostQuestions() {
  const apiUrl = useApiUrl();
  
  const postQuestions = async (newQuestions) => {
    const successfulAdditions = [];

    for (const question of newQuestions) {
      try {
        const res = await fetch(`${apiUrl}/questions`, {
          method: "POST",
          body: JSON.stringify({
            question: question.question,
            answer: question.answer,
          }),
          headers: {
            "content-type": "application/json",
          },
        });

        if (res.ok) {
          successfulAdditions.push(question);
        } else {
          console.log("Failed to add question to old questions list");
        }
      } catch (error) {
        console.error('Error adding question:', error);
      }
    }
  };

  return { postQuestions };
}
