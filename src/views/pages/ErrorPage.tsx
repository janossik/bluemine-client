import { useRouteError } from 'react-router-dom';
import { isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 404 || error.status === 401) {
      return (
        <div>
          <h1>Oops!</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      );
    }
    if (error.status === 403) {
      return (
        <div>
          <h1>Oops!</h1>
          <p>You are not authorized to access this page.</p>
        </div>
      );
    }
    return (
      <div>
        <h1>Oops!</h1>
        <p>An error occurred while loading the page. Please try again later.</p>
        <b>{error.status}</b> - <i>{error.statusText}</i>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Oops!</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
}
