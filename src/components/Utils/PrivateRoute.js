import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import DiaryContext from '../../DiaryContext';

export default function PrivateRoute({ component, ...props }) {
  const Component = component;
  const contextObj = useContext(DiaryContext);

  return (
    <Route
      {...props}
      render={componentProps => (
        ((contextObj.admin === 'parent') || (contextObj.admin === 'teacher'))
          ? <Component {...componentProps} />
          : <Redirect
              to={{
                pathname: '/error',
                state: { from: componentProps.location }
              }}
            />
      )}
    />
  );
};