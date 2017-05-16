
import React from 'react';
import { Router, hashHistory } from 'react-router/';
import App from 'containers/App';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

const routes = {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('pages/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'blog',
      getComponent(location, cb) {
        System.import('pages/Blog')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'about',
      getComponent(location, cb) {
        System.import('pages/About')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    }
  ]
};

export default () => (<Router history={hashHistory} routes={routes} />);


/*
import React from 'react';
import { Router, hashHistory, Route } from 'react-router';
import App from 'containers/App';
import Home from 'pages/Home';
import Blog from 'pages/Blog';
import About from 'pages/About';
const routes = (
  <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="blog" component={Blog}/>
      <Route path="about" component={About}/>
  </Route>
);
export default () => (<Router history={hashHistory} routes={routes} />);
*/
