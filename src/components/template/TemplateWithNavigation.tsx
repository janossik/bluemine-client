import { Link, Outlet, useNavigate } from 'react-router-dom';

const TemplateWithNavigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id='sidebar'>
        <h1>Bluemine</h1>

        <nav>
          <ul>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <Link to='/departments'>Departments</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
          <button
            onClick={() => {
              sessionStorage.clear();
              navigate('/login', { replace: true });
            }}
          >
            log out
          </button>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default TemplateWithNavigation;
