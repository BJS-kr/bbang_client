export const USER_QUERIES = {
  CREATE_USER:
    "INSERT INTO users (id, user_id, password, nickname) VALUES (?, ?, ?, ?)",
  GET_USER_BY_USER_ID: "SELECT * FROM users WHERE user_id = ?",
};
