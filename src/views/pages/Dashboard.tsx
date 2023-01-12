import { useCustomRouteLoaderData } from '~/hooks/useCustomRouteLoaderData';

const Dashboard = () => {
  const { user } = useCustomRouteLoaderData<{ user: { name: string } }>('auth');
  return (
    <div>
      <h1>Dashboard {user?.name}</h1>
    </div>
  );
};

export default Dashboard;
