import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
<div>
  {console.log('hello')}
        <route.component {...props} routes={route.routes} />
        </div>
      )}
    />
  );
}

export default RouteWithSubRoutes;
