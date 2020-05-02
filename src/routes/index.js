import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import Deliverymen from '~/pages/Deliverymen';
import Orders from '~/pages/Orders';
import Problems from '~/pages/Problems';
import Recipientes from '~/pages/Recipientes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliverymen" component={Deliverymen} isPrivate />
      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />
      <Route path="/recipientes" component={Recipientes} isPrivate />
    </Switch>
  );
}
