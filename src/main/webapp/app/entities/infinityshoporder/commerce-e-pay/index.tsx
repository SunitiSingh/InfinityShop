import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceEPay from './commerce-e-pay';
import CommerceEPayDetail from './commerce-e-pay-detail';
import CommerceEPayUpdate from './commerce-e-pay-update';
import CommerceEPayDeleteDialog from './commerce-e-pay-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceEPayUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceEPayUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceEPayDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceEPay} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceEPayDeleteDialog} />
  </>
);

export default Routes;
