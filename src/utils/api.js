import { baseUrl } from '@utils/constants.js';

async function apiRequest(endpoint, method = 'GET', body = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const response = await fetch(`${baseUrl}${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }
  const data = await response.json();
  if (!data.success) {
    throw new Error('Ошибка в данных от сервера');
  }
  return data;
}

export const getIngredients = async () => {
  const data = await apiRequest('/ingredients');
  return data.data;
};

export const createOrder = async (ingredients) => {
  return await apiRequest('/orders', 'POST', { ingredients });
};
