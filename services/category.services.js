import fetcher from '../utils/http.util';

function createCategory(payload) {
  return fetcher.post('/categories', payload);
}

function getAllCategories() {
  return fetcher.get('/categories');
}

export default {
  createCategory,
  getAllCategories,
};
