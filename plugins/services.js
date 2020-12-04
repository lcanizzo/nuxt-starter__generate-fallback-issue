import axios from 'axios';

const services = axios.create({
  baseURL: process.env.apiBaseUrl
});

export default ({ app }, inject) => {
  inject('services', services);
};
