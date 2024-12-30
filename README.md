UnWasted - Frontend
Welcome to UnWasted, a platform designed to connect local producers with the community while tackling food waste. Our mission is to make it easier for producers to share what they have to offer and for consumers to access fresh, local products right where they are.

This repository contains the frontend code for a Single Page Application (SPA) developed using JavaScript. The application interacts with a backend server to provide a seamless user experience. This project uses CORS, Axios, and Express to manage API requests and data flow between the frontend and backend.

Table of Contents
About
Features
Technologies Used
Setup and Installation
Usage
About
In this SPA, producers can create posts to showcase what they have available, whether it's fruits, vegetables, or any other fresh produce. Consumers can then browse these posts to find quality products nearby, supporting local businesses and reducing food waste.

This is the frontend of a larger project that relies on a backend server (available here). The application is designed as a Single Page Application (SPA) to ensure smooth navigation without page reloads. It uses modern JavaScript techniques and libraries to communicate efficiently with the backend server.

Features
Implemented Features:

SPA Navigation: Fast and smooth navigation without full-page reloads.
API Integration: Uses Axios for seamless communication with the backend server.
CORS Compatibility: Configured to handle Cross-Origin Resource Sharing (CORS) requests.
Dynamic Data Loading: Fetches and displays data from the backend in real-time.
Planned Features:

Improved error handling for API requests.
Enhanced user interface with animations.
Offline mode with service workers.
Technologies Used
JavaScript: Core language for building the application.
Axios: For making HTTP requests to the backend.
Express: Used to serve the SPA during development.
CORS: Configured for safe cross-origin requests.
HTML/CSS: For structuring and styling the user interface.
Setup and Installation
Clone the repository:

bash
Copy code
git clone https://github.com/AfonsoOliveira02/UnWastedFrontEnd.git
Navigate to the project directory:

bash
Copy code
cd UnWastedFrontEnd
Install dependencies:

bash
Copy code
npm install express
npm install axios
npm install cors
Start the development server:

bash
Copy code
node server.js
Usage
Ensure the backend server is running (see the backend repository for instructions: UnWastedBackEnd).
Start the frontend development server as described in the Setup and Installation section.
Open your browser and navigate to:
arduino
Copy code
http://localhost:3000
Interact with the application to view and manipulate data fetched from the backend.
