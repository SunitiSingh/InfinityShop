import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceItemShipInfo from './commerce-item-ship-info';
import CommerceItemShipInfoDetail from './commerce-item-ship-info-detail';
import CommerceItemShipInfoUpdate from './commerce-item-ship-info-update';
import CommerceItemShipInfoDeleteDialog from './commerce-item-ship-info-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceItemShipInfoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceItemShipInfoUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceItemShipInfoDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceItemShipInfo} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceItemShipInfoDeleteDialog} />
  </>
);

export default Routes;
