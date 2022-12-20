import { privateAPI, publicAPI } from './API';

const registerUser = async profile => {
  const { data } = await publicAPI.post('/users/signup', profile);
  return data;
};

const loginUser = async loginData => {
  const { data } = await publicAPI.post('/users/login', loginData);
  return data;
};

const logoutUser = async () => {
  await privateAPI.post(`/users/logout`);
};

const getCurrentUser = async () => {
  const { data } = await privateAPI.get('/users/current');
  return data;
};

export const authAPI = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};
