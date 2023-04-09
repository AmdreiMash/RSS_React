import axios from 'axios';

async function getDataByParams(params: string[]) {
  const qyery = params.map((param, i, arr) => {
    return `${i == 0 ? '?' : ''}${param}${i < arr.length - 1 ? '&' : ''}`;
  });
  try {
    const response = await axios(`https://rickandmortyapi.com/api/character/${qyery}`);
    return response.status === 200 ? response.data : false;
  } catch {
    return false;
  }
}

export default getDataByParams;
