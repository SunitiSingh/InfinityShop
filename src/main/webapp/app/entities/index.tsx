import React from 'react';
import { Switch } from 'react-router-dom';

// tslint:disable-next-line:no-unused-variable
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CommerceOrder from './infinityshoporder/commerce-order';
import CommerceOrderPrice from './infinityshoporder/commerce-order-price';
import CommerceOrderPriceNg from './infinityshoporder/commerce-order-price-ng';
import CommerceItem from './infinityshoporder/commerce-item';
import CommerceItemPrice from './infinityshoporder/commerce-item-price';
import CommerceItemPriceNg from './infinityshoporder/commerce-item-price-ng';
import CommerceShippingContainer from './infinityshoporder/commerce-shipping-container';
import CommerceShipContainerPrice from './infinityshoporder/commerce-ship-container-price';
import CommerceShipPriceNg from './infinityshoporder/commerce-ship-price-ng';
import CommerceOrderPayment from './infinityshoporder/commerce-order-payment';
import CommercePaymentCard from './infinityshoporder/commerce-payment-card';
import CommerceEPay from './infinityshoporder/commerce-e-pay';
import CommerceBillingAddress from './infinityshoporder/commerce-billing-address';
import CommerceItemShipInfo from './infinityshoporder/commerce-item-ship-info';
import CommerceItemPayInfo from './infinityshoporder/commerce-item-pay-info';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}/commerce-order`} component={CommerceOrder} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-order-price`} component={CommerceOrderPrice} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-order-price-ng`} component={CommerceOrderPriceNg} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-item`} component={CommerceItem} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-item-price`} component={CommerceItemPrice} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-item-price-ng`} component={CommerceItemPriceNg} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-shipping-container`} component={CommerceShippingContainer} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-ship-container-price`} component={CommerceShipContainerPrice} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-ship-price-ng`} component={CommerceShipPriceNg} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-order-payment`} component={CommerceOrderPayment} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-payment-card`} component={CommercePaymentCard} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-e-pay`} component={CommerceEPay} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-billing-address`} component={CommerceBillingAddress} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-item-ship-info`} component={CommerceItemShipInfo} />
      <ErrorBoundaryRoute path={`${match.url}/commerce-item-pay-info`} component={CommerceItemPayInfo} />
      {/* jhipster-needle-add-route-path - JHipster will routes here */}
    </Switch>
  </div>
);

export default Routes;
