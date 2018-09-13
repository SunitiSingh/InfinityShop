import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceOrderPrice from './commerce-order-price';
import CommerceOrderPriceDetail from './commerce-order-price-detail';
import CommerceOrderPriceUpdate from './commerce-order-price-update';
import CommerceOrderPriceDeleteDialog from './commerce-order-price-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceOrderPriceUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceOrderPriceUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceOrderPriceDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceOrderPrice} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceOrderPriceDeleteDialog} />
  </>
);

export default Routes;
