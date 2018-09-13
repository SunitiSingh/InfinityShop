import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommercePaymentCard from './commerce-payment-card';
import CommercePaymentCardDetail from './commerce-payment-card-detail';
import CommercePaymentCardUpdate from './commerce-payment-card-update';
import CommercePaymentCardDeleteDialog from './commerce-payment-card-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommercePaymentCardUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommercePaymentCardUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommercePaymentCardDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommercePaymentCard} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommercePaymentCardDeleteDialog} />
  </>
);

export default Routes;
