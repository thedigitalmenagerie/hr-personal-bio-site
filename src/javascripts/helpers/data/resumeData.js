import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getResumeCards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/resume.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getResumeCards;
