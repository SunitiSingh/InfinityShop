import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceItemPayInfo from './commerce-item-pay-info';
import CommerceItemPayInfoDetail from './commerce-item-pay-info-detail';
import CommerceItemPayInfoUpdate from './commerce-item-pay-info-update';
import CommerceItemPayInfoDeleteDialog from './commerce-item-pay-info-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceItemPayInfoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceItemPayInfoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceItemPayInfoDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceItemPayInfo} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceItemPayInfoDeleteDialog} />
  </>
);

export default Routes;
