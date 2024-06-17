import axios from 'axios';

const API_URL = 'http://localhost:8000/songs';

export const getSongs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};