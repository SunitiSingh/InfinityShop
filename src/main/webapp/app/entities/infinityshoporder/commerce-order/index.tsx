import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceOrder from './commerce-order';
import CommerceOrderDetail from './commerce-order-detail';
import CommerceOrderUpdate from './commerce-order-update';
import CommerceOrderDeleteDialog from './commerce-order-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceOrderUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceOrderUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceOrderDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceOrder} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceOrderDeleteDialog} />
  </>
);

export default Routes;
