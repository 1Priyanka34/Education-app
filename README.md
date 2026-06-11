# 🎓 AI Quiz Generator App

A React Native Educational Application that generates AI-powered quizzes using OpenRouter AI APIs. Users can select a topic and difficulty level, attempt multiple-choice questions, view their scorecard, and track quiz performance through a leaderboard.

## 🚀 Features

### 🤖 AI Quiz Generation

* Generate quizzes dynamically using OpenRouter AI.
* Supports custom topics such as:

  * React Native
  * JavaScript
  * Python
  * Android Development
  * Machine Learning
  * Data Structures
* Generates up to 20 MCQ questions automatically.

### 🎯 Difficulty Levels

Users can choose:

* Easy
* Medium
* Hard

The selected difficulty level is included in the AI prompt to generate appropriate questions.

### 📝 Interactive Quiz Experience

* One question displayed at a time.
* Previous Question navigation.
* Next Question navigation.
* Option selection with visual highlighting.
* Professional educational UI.

### 📊 Result Calculation

Automatically calculates:

* Correct Answers
* Total Score
* Percentage
* Pass / Fail Status

Passing Criteria:

* Percentage ≥ 34% → Passed
* Percentage < 34% → Failed

### 🏆 Leaderboard System

* Stores quiz attempts using JSON Server.
* Displays:

  * Student Name
  * Topic
  * Difficulty Level
  * Score
  * Percentage
  * Status

### 👤 User Authentication

* Login Screen
* Registration Screen

### 📚 Educational Portal Modules

* Home Page
* Course Listing
* Course Details
* Student Directory
* Teacher Directory
* Contact Page
* About Page

## 🛠 Tech Stack

### Frontend

* React Native
* React Navigation
* Context API
* Axios

### Backend

* JSON Server

### AI Integration

* OpenRouter API

### State Management

* React Hooks
* Context API

## 📂 Project Structure

my-app/
│
├── assets/
│   ├── images/
│      ├── logo.png
│      ├── banner.jpg
│      ├── web.jpg
│      ├── graphic.jpg
│      └── eth.jpg
│   
├── src/
│
│   ├── navigation/
│   │   ├── StackNavigator.js
│   │   └── BottomTabNavigator.js
│   │
│   ├── context/
│   │   └── AuthContext.js
│   │
│   ├── services/
│   │   ├── OpenRouterService.js
│   │   ├── LeaderboardService.js
│   │
│   ├── screens/
│   │
│   │   ├── SplashScreen.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │
│   │   ├── HomePage.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │
│   │   ├── Course.js
│   │   ├── CourseDetails.js
│   │
│   │   ├── Student.js
│   │   ├── Teacher.js
│   │
│   │   ├── EditProfile.js
│   │   ├── ChangePassword.js
│   │   ├── AIQuizScreen.js
│   │   ├── ResultScreen.js
│   │   └── LeaderboardScreen.js
│
├── db.json
│
├── App.js
│
├── package.json
├── package-lock.json
│
├── README.md
│
└── .gitignore

## 🔥 API Configuration

OpenRouter API Endpoint:

https://openrouter.ai/api/v1/chat/completions


<img width="472" height="835" alt="leaderboardpage" src="https://github.com/user-attachments/assets/1f40323b-940d-40ed-b470-1be2905d757b" />
Output
<img width="463" height="837" alt="quizresult" src="https://github.com/user-attachments/assets/1ad23817-ebb5-47b9-bf3b-d99b0937aa15" />
<img width="456" height="790" alt="quizpage2" src="https://github.com/user-attachments/assets/5c9cafbc-50de-43b1-9182-7b7fd1bcccbf" />
<img width="459" height="821" alt="quizpage1" src="https://github.com/user-attachments/assets/3441dc77-c3d9-43f5-bb4f-183080db6ecf" />
<img width="447" height="826" alt="contactscreen" src="https://github.com/user-attachments/assets/f9b9c2ce-a8e3-42de-959c-ba7d961e0eb7" />
<img width="447" height="826" alt="profilescreen" src="https://github.com/user-attachments/assets/e761ffd5-3e18-41a4-9ea3-e6076317dd79" />
<img width="454" height="817" alt="coursedetails" src="https://github.com/user-attachments/assets/006e3df1-90ad-4d8a-be19-5fb7eb3d5aa6" />
<img width="477" height="849" alt="coursesscreen" src="https://github.com/user-attachments/assets/798da1be-7540-41c8-bfdc-47aa26c6ff77" />
<img width="600" height="828" alt="homescreen" src="https://github.com/user-attachments/assets/09225ce1-6172-40e6-b86d-2e6ea45a0199" />
