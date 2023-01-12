import { useLoaderData } from 'react-router-dom';

export const useCustomLoaderData = <T,>() => {
  const result = useLoaderData();
  return result as T;
};
