import { Link, Outlet } from "react-router-dom";

const TemplateWithNavigation = () => {
  return (
    <>
      <div id="sidebar">
        <h1>Bluemine</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/departments">Departments</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default TemplateWithNavigation;
