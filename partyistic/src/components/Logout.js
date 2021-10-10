/** @format */

import React, { useEffect } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';

export default function SignUp(props) {
  const history = useHistory();

  useEffect(() => {
    const response = axiosInstance.post('user/Logout/blacklist/', {
      refresh_token: localStorage.getItem('refresh_token'),
    });

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('email');
    axiosInstance.defaults.headers['Authorization'] = null;
    history.push('/Login');
  });
  return <div>Logout</div>;
}
