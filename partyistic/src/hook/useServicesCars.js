import axios from 'axios';
import useSWR from 'swr';
import { useAuth } from '../Auth';

export const apiUrl =
  "https://partyistic.herokuapp.com/api/v1/partyistic/cars/";

export default function useResourceCar() {
  const { logout } = useAuth();

  const { data, error, mutate } = useSWR([apiUrl], fetchResourceCar);

  async function fetchResourceCar(apiUrl) {
    try {
      const response = await axios.get(apiUrl);

      return response.data;
    } catch (error) {
      handleError(error);
    }
  }

  function handleError(error) {
    console.error(error);
    logout();
  }

  return {
    carresources: data,

  };
}