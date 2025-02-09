# The Curl Diary 

The Curl Diary is a full-stack natural hair tracker application that allow users to track their natural hair journey by providing a space where they can see their growth, and find resources that will help them on their journey all in one place.

<!-- **Project Link:** https://the-curl-diary.up.railway.app/ -->

## Running The Project

1. Clone the Repository:
    ``` git clone```
2. Navigate to project directory:
    ```cd the-curl-diary```
3. Install Dependecies:
    ```npm install```
4. Create a ``.env`` file in config folder and add the following as ``key = value``
    - PORT = 2017 (can be any port example: 3000)
    - DB_STRING = your database URI
    - CLOUD_NAME = your cloudinary cloud name
    - API_KEY = your cloudinary api key
    - API_SECRET = your cloudinary api secret

5. Run application ``npm run curls``
6. Navigate to ``localhost:2017``


## Features
- User Authentication: Secure login and registration functionality powered by Passport.js.
- Hair Tracker: Logs and visualizes users' natural hair journey, including styles and progress updates.
- Dynamic Content: Seamlessly integrates user data with dynamic EJS templates for personalized experiences.

## Technology Used
 HTML, Tailwind CSS, JavaScript, Node.js, Express.js, MongoDB
- **Frontend**: Developed with HTML and styled using Tailwind CSS for a responsive and modern user interface.
- **Backend:** Built with Node.js and Express.js to handle server-side logic and routing.
**Database:** Utilizes MongoDB for storing user data and hair journey entries.
- **Templating:** Employs EJS (Embedded JavaScript) for rendering dynamic content on the frontend.

## Optimizations 
- Added robust error handling for user input and authentication.
- Improved database queries for faster recommendation generation.
- Designed a user-friendly and visually engaging interface with consistent styling using Tailwind CSS.

## Lessons Learned
- Strengthened understanding of full-stack application development.
- Gained experience integrating MongoDB for scalable data management.
- Learned to implement and customize user authentication with Passport.js.

## Future Developments
- [ ] Hair Quiz & Recommendation Engine: Implementing an interactive hair quiz to provide users with personalized product and tool suggestions.
- [ ] React Migration: Refactoring the current codebase to a React application for better scalability and performance.
- [ ] Community Feature: Introducing a social aspect where users can interact, share tips, post updates, and follow each other's hair journeys—a feature similar to a hair-focused Instagram.

