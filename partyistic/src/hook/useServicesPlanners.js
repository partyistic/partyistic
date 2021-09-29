import axios from 'axios';
import useSWR from 'swr';
import { useAuth } from '../Auth';

export const apiUrl =
  "https://partyistic.herokuapp.com/api/v1/partyistic/planners/";

export default function useResourceplanners() {
  const { logout } = useAuth();

  const { data, error, mutate } = useSWR([apiUrl], fetchResourceplanners);

  async function fetchResourceplanners(apiUrl) {
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
    plannerresources: data,
  };
}

