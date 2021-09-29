import axios from 'axios';
import useSWR from 'swr';
import { useAuth } from '../Auth';

export const apiUrl =
  "https://partyistic.herokuapp.com/api/v1/partyistic/trips/";

export default function useResourcetrip() {
  const { logout } = useAuth();

  const { data, error, mutate } = useSWR([apiUrl], fetchResourcetrip);

  async function fetchResourcetrip(apiUrl) {
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
    tripresources: data,
  };
}