# Pub Quiz App

![Pub Quiz](https://github.com/kojiado/pub-quiz/assets/127887180/4faea301-5b26-474d-b913-17b813138072)

## Overview

The Pub Quiz App is a web application built with Next.js that allows administrators to create, edit, manage, and send quizzes to users. This README provides an overview of the project and its features.

## Features

- **Quiz Creation**: Users have the power to craft engaging quizzes effortlessly. Create your questions and answers.

- **Quiz Editing**: Got some changes to make? No problem! You can easily update your quizzes, swap out questions, and fine-tune your content.

- **Quiz Deletion**: If a quiz has run its course or no longer suits your fancy, you can simply delete it. A clean slate for new challenges.

- **Start Quiz**: Participants can dive into the quiz excitement with a single click. As you progress, questions are presented to you, but there's a twist—answers are blurred, adding an element of surprise.

- **Reveal Answers**: Ready to know if you're right? You have the option to unveil the answer by clicking a button. Compare your response and learn on the go.

- **Question Recycling**: Stuck in a creative rut? No worries! Reuse questions from your previous quizzes, giving you a helping hand when inspiration runs dry.

## Technologies Used

The Pub Quiz App is built using the following technologies:

- **React**: A JavaScript library for building interactive and user-friendly web interfaces.

- **Next.js**: A popular React framework for developing server-rendered web applications.

- **Tailwind CSS**: A utility-first CSS framework for efficient UI development.


## Installation

To run the Pub Quiz App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/kojiado/pub-quiz.git`
2. Install dependencies: `npm install`
3. Start the Next.js development server: `npm run dev`
4. In a separate terminal window, you might encounter an issue with the execution policy. To resolve this, run the following command within your application's main directory to enable it to work: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned`. This ensures that you're not altering your system's execution policy but allowing it to run within your application.
5. After setting the execution policy, make sure to start the JSON Server for the mock API to work with the following command: `json-server db.json --port 3001`

The application will be accessible at `http://localhost:3000/`.

In a real-world scenario, it is crucial to implement authentication and authorization to ensure secure access to application features. For the purposes of this example, the app currently allows anyone to create, edit, and delete quizzes for demonstration purposes.


Thank you for exploring the Pub Quiz App. If you have any questions or feedback, please feel free to reach out.

Enjoy the quiz experience! 🚀
