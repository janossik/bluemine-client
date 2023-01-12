import { Form } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Form method='post' action='/'>
        <button type='submit'>Log in</button>
      </Form>
    </div>
  );
};

export default Login;
