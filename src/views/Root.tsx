import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useCustomLoaderData } from '~/hooks/useCustomLoaderData';

let user: { name: string } | null = { name: 'John Doe' };

export async function loader() {
  return { user };
}

export async function action() {
  user = { name: 'John Doe' };
  return user;
}

function Root() {
  const result = useCustomLoaderData<{ user: { name: string } | null }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!result.user) {
      return navigate(`/login`);
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

export default Root;
