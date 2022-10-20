import config from './config';

const API_ENDPOINT = {
  LIST: `${config.API_BASE_URL}/list`,
  DETAIL: (id) => `${config.API_BASE_URL}/detail/${id}`,
  ADD_REVIEW: `${config.API_BASE_URL}/review`,
};

export default API_ENDPOINT;
