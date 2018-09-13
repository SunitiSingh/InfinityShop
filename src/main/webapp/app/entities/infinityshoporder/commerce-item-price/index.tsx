import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceItemPrice from './commerce-item-price';
import CommerceItemPriceDetail from './commerce-item-price-detail';
import CommerceItemPriceUpdate from './commerce-item-price-update';
import CommerceItemPriceDeleteDialog from './commerce-item-price-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceItemPriceUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceItemPriceUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceItemPriceDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceItemPrice} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceItemPriceDeleteDialog} />
  </>
);

export default Routes;
