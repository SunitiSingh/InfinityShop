import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceShipPriceNg from './commerce-ship-price-ng';
import CommerceShipPriceNgDetail from './commerce-ship-price-ng-detail';
import CommerceShipPriceNgUpdate from './commerce-ship-price-ng-update';
import CommerceShipPriceNgDeleteDialog from './commerce-ship-price-ng-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceShipPriceNgUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceShipPriceNgUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceShipPriceNgDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceShipPriceNg} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceShipPriceNgDeleteDialog} />
  </>
);

export default Routes;
