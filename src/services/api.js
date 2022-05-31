import axios from "axios";

const api = axios.create();

api.defaults.baseURL =
	process.env.NODE_ENV === "production"
		? process.env.SERVER_URL
		: "http://localhost:5000";

console.log(api.defaults.baseURL);

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

/**
 *
 * @param {Object} user
 * @returns
 */
export const editUser = (user) => api.post("/input", user);

/**
 *
 * @param {Object} form
 * @returns
 */
export const login = (form) => api.post("/login", form);

export const logout = () => api.get("/logout");

/**
 *
 * @param {Object} form
 * @returns
 */
export const signUp = (form) => api.post("/sign_up", form);
