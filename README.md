# iTunes Search App

## Description

The iTunes Search App is a full-stack web application that allows users to search for and explore content within the iTunes Store and Apple Books Store. Users can search for various types of media, view detailed information about each item, and create a personalized list of favorite content.

## Purpose

This application serves as a user-friendly interface for searching and exploring the vast content available on iTunes and Apple Books. It demonstrates the integration of a React frontend with an Express backend, showcasing skills in both client-side and server-side development, as well as API integration and basic user experience design.

## Key Features

- Search functionality for various media types (music, movies, podcasts, etc.)
- Detailed information display for search results
- Add and remove items from a favorites list
- Responsive design for optimal viewing on different devices
- Secure API communication using JWT authentication
- User-friendly interface with clear feedback on search results and loading states

## Technologies Used

- Frontend: React, React Bootstrap
- Backend: Node.js, Express
- API: iTunes Search API
- Authentication: JSON Web Tokens (JWT)
- Version Control: Git

## API Reference

This project uses the iTunes Search API provided by Apple. The API allows searching for content within the iTunes Store and Apple Books Store.

API Documentation: [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html)

Key Endpoints Used:

- Search: `https://itunes.apple.com/search?parameterkeyvalue`
- Lookup: `https://itunes.apple.com/lookup?parameterkeyvalue`

For detailed information on parameters and response formats, please refer to the official API documentation.

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository
2. Install dependencies for the backend
   cd backend
   npm install
3. Start the backend server
   npm start
   The backend should now be running on `http://localhost:5000`
4. Open a new terminal window, navigate to the project root, and install dependencies for the frontend
   cd ../frontend
   npm install
5. Start the frontend development server
   npm start
   The frontend should now be running on `http://localhost:3000`

## How to Use

1. Enter a search term in the search bar
2. Select a content type from the dropdown menu (or leave as "All")
3. Click the search button or press Enter to search
4. Browse through the results and click the heart icon to add items to favorites
5. View favorited items in the Favorites section
6. Remove items from favorites by clicking the trash icon
