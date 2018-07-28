import React from 'react';
import { Switch, Route, Router} from 'dva/router';
import PropTypes from 'prop-types'
import dynamic from 'dva/dynamic';


const Routers = function ({ history, app }) {
  const routes = [
     {
      path: '/',
      models: () => [
        import('./models/nav')
      ],
      component: () => import('./routes/Index'),
    }
  ]

  return (
     <Router history={history}>
        <Switch>
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
        </Switch>
 </Router>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
