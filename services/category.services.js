import fetcher from "../utils/http.util";

function createCategory(payload) {
  return fetcher.post("/categories", payload);
}

export default {
  createCategory,
};
