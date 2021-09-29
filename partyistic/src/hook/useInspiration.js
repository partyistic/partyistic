/** @format */

import axios from 'axios';
import useSWR from 'swr';
import { useAuth } from '../Auth';

export const apiUrl =
  'https://partyistic.herokuapp.com/api/v1/partyistic/inspiration/';

export default function useResource() {
  const { logout } = useAuth();

  const { data, error, mutate } = useSWR([apiUrl], fetchResource);

  async function fetchResource(apiUrl) {
    try {
      const response = await axios.get(apiUrl);

      return response.data;
    } catch (error) {
      handleError(error);
    }
  }

  // async function createResource(info) {

  //     try {
  //         await axios.post(apiUrl, info, config());
  //         mutate(); // mutate causes complete collection to be refetched
  //     } catch (error) {
  //         handleError(error);
  //     }
  // }

  // async function deleteResource(id) {

  //     try {
  //         const url = apiUrl + id;
  //         await axios.delete(url, config());
  //         mutate(); // mutate causes complete collection to be refetched
  //     } catch (error) {
  //         handleError(error);
  //     }
  // }

  // async function updateResource(resource) {
  //     // STRETCH
  //     // Add ability for user to update an existing resource
  // }

  function handleError(error) {
    console.error(error);
    logout();
  }

  return {
    resources: data,
    error,
    // createResource,
    // deleteResource,
    // updateResource,
  };
}
