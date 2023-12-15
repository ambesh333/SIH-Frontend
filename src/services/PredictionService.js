import axios from 'axios';

const baseUrl = 'api_url';

export async function makePrediction(data) {
  try {
    const response = await axios.post(baseUrl, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}