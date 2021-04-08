import React from 'react';
import { useSelector } from 'react-redux';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';
import RootState from '../store/modules/rootState';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const signed = useSelector<RootState>(state => state.auth.signed);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return <Component />;
      }}
    />
  );
};

export default Route;

// isPrivate === signed ? (
//   <Component />
// ) : (
//   <Redirect
//     to={{
//       pathname: '/',
//       state: { from: location },
//     }}
//   />
// );
