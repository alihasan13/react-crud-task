import axios from 'axios';

export const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  localStorage.setItem('posts', JSON.stringify(response.data));
  return response.data;
};

