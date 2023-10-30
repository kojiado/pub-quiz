# Pub Quiz App

![Pub Quiz](https://github.com/kojiado/pub-quiz/assets/127887180/4faea301-5b26-474d-b913-17b813138072)

## Overview

The Pub Quiz App is a web application built with Next.js that allows administrators to create, edit, manage, and send quizzes to users. This README provides an overview of the project and its features.

## Features

- **Quiz Creation**: Users have the power to craft engaging quizzes effortlessly. Create your questions and answers, or recycle questions from previous quizzes if you're feeling nostalgic.

- **Quiz Editing**: Got some changes to make? No problem! You can easily update your quizzes, swap out questions, and fine-tune your content.

- **Quiz Deletion**: If a quiz has run its course or no longer suits your fancy, you can simply delete it. A clean slate for new challenges.

- **Start Quiz**: Participants can dive into the quiz excitement with a single click. As you progress, questions are presented to you, but there's a twist—answers are blurred, adding an element of surprise.

- **Reveal Answers**: Ready to know if you're right? You have the option to unveil the answer by clicking a button. Compare your response and learn on the go.

- **Question Recycling**: Stuck in a creative rut? No worries! Reuse questions from your previous quizzes, giving you a helping hand when inspiration runs dry.

## Technologies Used

The Pub Quiz App is built using the following technologies:

- **Next.js**: A popular React framework for developing server-rendered web applications.

- **json-server**: A simple JSON-based backend mock API for fast development and testing.

- **React**: A JavaScript library for building interactive and user-friendly web interfaces.

## Installation

To run the Pub Quiz App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/kojiado/pub-quiz.git`
2. Install dependencies: `npm install`
3. Start the Next.js development server: `npm run dev`
4. In a separate terminal window, start the json-server for the mock API with the following command:: `json-server db.json --port 3001`

The application will be accessible at `http://localhost:3000/`.

Please note that for a real-world scenario, you would typically implement authentication and authorization to ensure secure access to these features. In this example, the app allows anyone to create, edit, and delete quizzes for demonstration purposes.


Thank you for exploring the Pub Quiz App. If you have any questions or feedback, please feel free to reach out.

Enjoy the quiz experience! 🚀
