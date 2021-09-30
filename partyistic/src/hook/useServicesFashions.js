import axios from 'axios';
import useSWR from 'swr';
import { useAuth } from '../Auth';

export const apiUrl =
  "https://partyistic.herokuapp.com/api/v1/partyistic/fashion/";

export default function useResourceFash() {
  const { logout } = useAuth();

  const { data, error, mutate } = useSWR([apiUrl], fetchResourcefash);

  async function fetchResourcefash(apiUrl) {
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
    fashresources: data,
  };
}