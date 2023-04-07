import axios from 'axios';
import { URL } from './constants';

export const getSnippets = async () => {
  try {
    const res = await axios.get(URL.domain + '/', {});
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export const login = async (username: string, password: string) => {
  try {
    const res = await axios.post(URL.domain + '/user/login', {
      username: username,
      password: password
    }, { 
      withCredentials: true 
    });
    return res;
  } catch (e) {
    console.error(e);
  }
}