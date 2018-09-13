import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceOrderPayment from './commerce-order-payment';
import CommerceOrderPaymentDetail from './commerce-order-payment-detail';
import CommerceOrderPaymentUpdate from './commerce-order-payment-update';
import CommerceOrderPaymentDeleteDialog from './commerce-order-payment-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceOrderPaymentUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceOrderPaymentUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceOrderPaymentDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceOrderPayment} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceOrderPaymentDeleteDialog} />
  </>
);

export default Routes;
