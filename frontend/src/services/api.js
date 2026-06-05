import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

const apiClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const travelAPI = {
  checkHealth: async () => {
    const response = await apiClient.get('/health');
    return response.data;
  },
  generatePlan: async (planData) => {
    const response = await apiClient.post('/travel-plan', planData);
    return response.data;
  }
};
