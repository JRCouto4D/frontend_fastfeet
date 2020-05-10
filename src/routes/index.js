import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Deliverymen from '~/pages/Deliverymen';
import Deliveries from '~/pages/Deliveries';
import DeliveriesForom from '~/pages/DeliveriesForm';
import Problems from '~/pages/Problems';
import Recipientes from '~/pages/Recipientes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliverymen" component={Deliverymen} isPrivate />
      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route
        path="/deliveries/form"
        exact
        component={DeliveriesForom}
        isPrivate
      />
      <Route path="/problems" component={Problems} isPrivate />
      <Route path="/recipientes" component={Recipientes} isPrivate />
    </Switch>
  );
}
