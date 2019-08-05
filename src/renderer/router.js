import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import { Paths } from '~/config/constants';
import pages from '~/pages';

export default function({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={pages.Login} />
        {/* <Route path="/" component={layouts.Layout} /> */}
      </Switch>
    </Router>
  );
}
