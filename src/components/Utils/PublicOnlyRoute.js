import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import DiaryContext from '../../DiaryContext';

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  const contextObj = useContext(DiaryContext);

  return (
    <Route
      {...props}
      render={componentProps => (
        (contextObj.admin)
          ? <Redirect to={'/'} />
          : <Component {...componentProps} />
      )}
    />
  )
}