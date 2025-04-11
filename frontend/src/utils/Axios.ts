import axios from 'axios';
import axiosRetry from 'axios-retry';
import { env } from './env';

const axiosInstance = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// to validate token keycloak
axiosRetry(axiosInstance, {
  retries: 1,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: error => {
    return error.response?.status === 401;
  },
});

export { axiosInstance };
