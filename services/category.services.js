import fetcher from "../utils/http.util";

function createCategory(paylaod) {
  return fetcher.post("/categories", payload);
}

export default {
  createCategory,
};
