import axios from 'axios';

import { API_ROUTES } from "../constants/apiRoutes";

export const getAllPostComments = (postId) => axios.get(`${API_ROUTES.POSTS}/${postId}/comments`).then((res) => {
	return res.data;
});

export const createOneComment = (postId, { text, name }) => axios.post(`${API_ROUTES.POSTS}/${postId}/comments`, {
	text, name
});

export const updateComment = (commentId, { text, name }) => axios.put(`${API_ROUTES.COMMENTS}/${commentId}`, {
	text, name
});

export const deleteComment = (commentId) => axios.delete(`${API_ROUTES.COMMENTS}/${commentId}`);