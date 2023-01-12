import { useLoaderData } from "react-router-dom";

export const useCustomLoaderData = <T extends unknown>() => {
  const result = useLoaderData();
  return result as T;
};
