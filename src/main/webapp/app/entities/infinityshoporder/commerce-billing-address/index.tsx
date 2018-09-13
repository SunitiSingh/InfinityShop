import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceBillingAddress from './commerce-billing-address';
import CommerceBillingAddressDetail from './commerce-billing-address-detail';
import CommerceBillingAddressUpdate from './commerce-billing-address-update';
import CommerceBillingAddressDeleteDialog from './commerce-billing-address-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceBillingAddressUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceBillingAddressUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceBillingAddressDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceBillingAddress} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceBillingAddressDeleteDialog} />
  </>
);

export default Routes;
