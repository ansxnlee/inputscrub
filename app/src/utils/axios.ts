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

export const createSnippet = async (text: string, sign: string) => {
  try {
    const res = await axios.post(URL.domain + '/', {
      text: text,
      sign: sign
    });
    return res;
  } catch (e) {
    console.error(e);
  }
}
