import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceShipContainerPrice from './commerce-ship-container-price';
import CommerceShipContainerPriceDetail from './commerce-ship-container-price-detail';
import CommerceShipContainerPriceUpdate from './commerce-ship-container-price-update';
import CommerceShipContainerPriceDeleteDialog from './commerce-ship-container-price-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceShipContainerPriceUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceShipContainerPriceUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceShipContainerPriceDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceShipContainerPrice} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceShipContainerPriceDeleteDialog} />
  </>
);

export default Routes;
