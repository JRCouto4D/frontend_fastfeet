import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Deliverymen from '~/pages/Deliverymen';
import DeliverymenForm from '~/pages/DeliverymenForm';
import Deliveries from '~/pages/Deliveries';
import DeliveriesForom from '~/pages/DeliveriesForm';
import Problems from '~/pages/Problems';
import Recipients from '~/pages/Recipientes';
import RecipientsForm from '~/pages/RecipientsForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
      <Route
        path="/deliverymen/form"
        exact
        component={DeliverymenForm}
        isPrivate
      />
      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route
        path="/deliveries/form"
        exact
        component={DeliveriesForom}
        isPrivate
      />
      <Route path="/problems" component={Problems} isPrivate />
      <Route path="/recipientes" exact component={Recipients} isPrivate />
      <Route
        path="/recipientes/form"
        exact
        component={RecipientsForm}
        isPrivate
      />
    </Switch>
  );
}
