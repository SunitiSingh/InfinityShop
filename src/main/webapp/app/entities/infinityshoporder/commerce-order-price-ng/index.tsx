import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceOrderPriceNg from './commerce-order-price-ng';
import CommerceOrderPriceNgDetail from './commerce-order-price-ng-detail';
import CommerceOrderPriceNgUpdate from './commerce-order-price-ng-update';
import CommerceOrderPriceNgDeleteDialog from './commerce-order-price-ng-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceOrderPriceNgUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceOrderPriceNgUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceOrderPriceNgDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceOrderPriceNg} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceOrderPriceNgDeleteDialog} />
  </>
);

export default Routes;
