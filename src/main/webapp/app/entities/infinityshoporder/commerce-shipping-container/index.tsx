import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceShippingContainer from './commerce-shipping-container';
import CommerceShippingContainerDetail from './commerce-shipping-container-detail';
import CommerceShippingContainerUpdate from './commerce-shipping-container-update';
import CommerceShippingContainerDeleteDialog from './commerce-shipping-container-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceShippingContainerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceShippingContainerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceShippingContainerDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceShippingContainer} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceShippingContainerDeleteDialog} />
  </>
);

export default Routes;
