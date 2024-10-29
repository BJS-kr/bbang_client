import { v4 as uuidv4 } from "uuid";
import pools from "../database.js";
import { USER_QUERIES } from "./user.queries.js";
import "../types.js";

/**
 * @returns {QueryResult}
 */
export const createUser = async (userId, password, nickname) => {
  const id = uuidv4();

  return pools.USER_DB.query(USER_QUERIES.CREATE_USER, [
    id,
    userId,
    password,
    nickname,
  ]);
};

/**
 * @returns {QueryResult}
 */
export const getUserByUserId = async (userId) => {
  return pools.USER_DB.query(USER_QUERIES.GET_USER_BY_USER_ID, [userId]);
};
