import React from 'react';
import { useRouteError, NavLink } from 'react-router-dom';

const ErrorPage = () => {
  
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message || 'Unknown error'}</i>
        <NavLink to="/">{" "} Go Home {" "}</NavLink>
      </p>
    </div>
  );
};

export default ErrorPage;