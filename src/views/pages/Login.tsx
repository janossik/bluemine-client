import { useEffect } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { useCustomRouteLoaderData } from '~/hooks/useCustomRouteLoaderData';

const Login = () => {
  const result = useCustomRouteLoaderData<{ user: { name: string } | null }>('root');
  const navigate = useNavigate();

  useEffect(() => {
    if (result.user) {
      return navigate(`/`);
    }
  }, []);

  return (
    <div>
      <Form method='post' action='/'>
        <button type='submit'>Log in</button>
      </Form>
    </div>
  );
};

export default Login;
