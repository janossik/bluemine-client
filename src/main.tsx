import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage';
import Root, { action, loader } from '~/views/Root';
import Dashboard from './views/pages/Dashboard';
import Departments from './views/pages/Departments';
import Teams from './views/pages/Teams';
import Users from './views/pages/Users';
import Department from './views/pages/Department';
import Team from './views/pages/Team';
import User from './views/pages/User';
import Project from './views/pages/Project';
import Projects from './views/pages/Projects';
import Login from './views/pages/Login';
import TemplateWithNavigation from './components/template/TemplateWithNavigation';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: loader,
    action: action,
    children: [
      {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        element: <TemplateWithNavigation />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: 'departments',
            element: <Departments />,
          },
          {
            path: 'projects',
            element: <Projects />,
          },
          {
            path: 'teams',
            element: <Teams />,
          },
          {
            path: 'users',
            element: <Users />,
          },
          {
            path: 'department/:id',
            element: <Department />,
          },
          {
            path: 'team/:id',
            element: <Team />,
          },
          {
            path: 'user/:id',
            element: <User />,
          },
          {
            path: 'project/:id',
            element: <Project />,
          },
        ],
      },
    ],
  },
]);

const root = document.getElementById('root');

if (root === null) {
  throw new Error('root element not found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
