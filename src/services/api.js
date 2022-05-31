import axios from "axios";

const api = axios.create();

api.defaults.baseURL = "http://localhost:5000";

/**
 *
 * @param {string} email
 * @returns
 */
export const user = (email) => api.post("/user", { email });

/**
 *
 * @param {string} email
 * @returns
 */
export const recommend = (email) => api.post("/recommend", { email });
