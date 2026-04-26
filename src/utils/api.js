import { baseUrl } from '@utils/constants.js';

export const getIngredients = async () => {
  const response = await fetch(`${baseUrl}/ingredients`);
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }
  const data = await response.json();
  if (!data.success) {
    throw new Error('Ошибка в данных от сервера');
  }
  return data.data;
};
