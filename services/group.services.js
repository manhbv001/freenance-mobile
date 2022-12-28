import fetcher from "../utils/http.util";

function createGroup(payload) {
  return fetcher.post("/groups", payload);
}

function getAllGroup() {
  return fetcher.get("/groups");
}

export default {
  createGroup,
  getAllGroup
};
