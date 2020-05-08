import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Deliverymen from '~/pages/Deliverymen';
import Orders from '~/pages/Orders';
import OrdersRegister from '~/pages/Orders/Register';
import Problems from '~/pages/Problems';
import Recipientes from '~/pages/Recipientes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliverymen" component={Deliverymen} isPrivate />
      <Route path="/orders" exact component={Orders} isPrivate />
      <Route
        path="/orders/register"
        exact
        component={OrdersRegister}
        isPrivate
      />
      <Route path="/problems" component={Problems} isPrivate />
      <Route path="/recipientes" component={Recipientes} isPrivate />
    </Switch>
  );
}
