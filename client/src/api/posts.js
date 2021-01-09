import axios from 'axios';
import { API_ROUTES } from '../constants/apiRoutes'

export const getAllPosts = () => axios.get(API_ROUTES.POSTS).then((res) => {
	return res.data;
})

export const getOnePost = (id) => axios.get(`${API_ROUTES.POSTS}/${id}`);