import fetcher from '../utils/http.util';

function createTransaction(payload) {
  return fetcher.post('/transactions', payload);
}

function getAllTransactions() {
  return fetcher.get('/transactions');
}

export default {
  createTransaction,
  getAllTransactions
};
