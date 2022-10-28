import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}categories`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {

      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Erro do servidor');
    });
}

async function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {

      if (response.ok) {
        const data = await response.json();

        return data;
      }

      throw new Error('Erro do servidor');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
