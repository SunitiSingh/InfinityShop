import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceItemPriceNg from './commerce-item-price-ng';
import CommerceItemPriceNgDetail from './commerce-item-price-ng-detail';
import CommerceItemPriceNgUpdate from './commerce-item-price-ng-update';
import CommerceItemPriceNgDeleteDialog from './commerce-item-price-ng-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceItemPriceNgUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceItemPriceNgUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceItemPriceNgDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceItemPriceNg} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceItemPriceNgDeleteDialog} />
  </>
);

export default Routes;
