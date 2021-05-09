import axios from "axios";

const deleteUser = async (id) =>
	axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`);

const updateUser = async (id, data) =>
	axios.patch(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`, data);

const createUser = async (data) =>
	axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, data);

const getAllUsers = async () => axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`);

const getUser = async (id) =>
	axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`);

// eslint-disable-nextline
export { deleteUser, updateUser, createUser, getAllUsers, getUser };
