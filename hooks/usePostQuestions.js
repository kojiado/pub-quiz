import { useState } from 'react';

export function usePostQuestions() {
  const postQuestions = async (newQuestions) => {
    const successfulAdditions = [];

    for (const question of newQuestions) {
      try {
        const res = await fetch("http://localhost:3001/questions", {
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
