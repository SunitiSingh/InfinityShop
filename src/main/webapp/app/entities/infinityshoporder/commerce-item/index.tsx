import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceItem from './commerce-item';
import CommerceItemDetail from './commerce-item-detail';
import CommerceItemUpdate from './commerce-item-update';
import CommerceItemDeleteDialog from './commerce-item-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CommerceItemUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CommerceItemUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CommerceItemDetail} />
      <ErrorBoundaryRoute path={match.url} component={CommerceItem} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={CommerceItemDeleteDialog} />
  </>
);

export default Routes;
