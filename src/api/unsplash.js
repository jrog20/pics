import axios from 'axios';

// create an instance of axios
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID vXO8t_QybpDh73rhxROhnaVxg2bm11h14VGHI8stS1U'
  }
});
