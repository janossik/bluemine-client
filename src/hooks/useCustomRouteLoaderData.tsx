import { useRouteLoaderData } from 'react-router-dom';

export const useCustomRouteLoaderData = <T,>(routeId: string) => {
  const result = useRouteLoaderData(routeId);

  return result as T;
};
