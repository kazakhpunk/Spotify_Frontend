import axios from 'axios';

const API_URL = 'https://spotifybackend-production-4131.up.railway.app/songs';

export const getSongs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};
