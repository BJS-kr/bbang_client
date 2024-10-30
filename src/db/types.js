/**
 * @typedef {{result: Object | null, error: Error | null}} QueryResult
 *
 * @typedef {{
 *  id: string;
 *  user_id: string;
 *  password: string;
 *  nickname: string;
 *  created_at: string;
 *  updated_at: string;
 * }} User
 *
 * @typedef {import('node:net').Socket & {
 *    user: User;
 *    buffer: Buffer;
 *    id: string;
 *  }
 * } CustomSocket
 */
