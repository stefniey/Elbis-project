import axios from 'axios';

// Create an Axios instance with your backend base URL
const api = axios.create({
  baseURL: 'http://localhost:3000', // Your backend URL
});

// Function to register a user
export const registerUser = async (userData: { username: string; email: string; password: string }) => {
  try {
    const response = await api.post('/users/register', userData); // Ensure this matches your backend endpoint
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};


 