import axios from 'axios';

const URL = 'https://dummyjson.com/products';

export const CardData = async () => {
  try {
       const response = await axios.get(URL);

    return response.data;
  } catch (error) {
    console.error('Error', error);
    
  }
};