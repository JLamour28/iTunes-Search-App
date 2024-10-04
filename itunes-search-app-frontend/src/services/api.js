// Import axios for making HTTP requests
import axios from 'axios';

// Define the base URL for API requests
const API_BASE_URL = 'http://localhost:5000/api';

// Function to get an authentication token from the server
export const getToken = async () => {
  try {
    // Send GET request to the token endpoint
    const response = await axios.get(`${API_BASE_URL}/token`);
    // Return the token from the response
    return response.data.token;
  } catch (error) {
    // Log any errors that occur during the request
    console.error('Error getting token:', error);
    // Return null if there's an error
    return null;
  }
};

// Function to search iTunes using the provided token, term, and media type
export const searchItunes = async (token, term, media) => {
  try {
    // Send POST request to the search endpoint
    const response = await axios.post(
      `${API_BASE_URL}/search`,
      // Request body containing search term and media type
      { term, media },
      // Request headers including the authorization token
      { headers: { Authorization: `Bearer ${token}` } }
    );
    // Return the search results from the response
    return response.data;
  } catch (error) {
    // Log any errors that occur during the search
    console.error('Error searching iTunes:', error);
    // Return an empty array if there's an error
    return [];
  }
};