import api from "./apiConfig";

export const getPosts = async () => {
  try {
    const res = await api.get('/posts');
    return res.data;
  } catch (error) {
    throw error;
  }
}