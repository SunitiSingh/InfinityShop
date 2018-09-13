import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
// prettier-ignore
import commerceOrder, {
  CommerceOrderState
} from 'app/entities/infinityshoporder/commerce-order/commerce-order.reducer';
// prettier-ignore
import commerceOrderPrice, {
  CommerceOrderPriceState
} from 'app/entities/infinityshoporder/commerce-order-price/commerce-order-price.reducer';
// prettier-ignore
import commerceOrderPriceNg, {
  CommerceOrderPriceNgState
} from 'app/entities/infinityshoporder/commerce-order-price-ng/commerce-order-price-ng.reducer';
// prettier-ignore
import commerceItem, {
  CommerceItemState
} from 'app/entities/infinityshoporder/commerce-item/commerce-item.reducer';
// prettier-ignore
import commerceItemPrice, {
  CommerceItemPriceState
} from 'app/entities/infinityshoporder/commerce-item-price/commerce-item-price.reducer';
// prettier-ignore
import commerceItemPriceNg, {
  CommerceItemPriceNgState
} from 'app/entities/infinityshoporder/commerce-item-price-ng/commerce-item-price-ng.reducer';
// prettier-ignore
import commerceShippingContainer, {
  CommerceShippingContainerState
} from 'app/entities/infinityshoporder/commerce-shipping-container/commerce-shipping-container.reducer';
// prettier-ignore
import commerceShipContainerPrice, {
  CommerceShipContainerPriceState
} from 'app/entities/infinityshoporder/commerce-ship-container-price/commerce-ship-container-price.reducer';
// prettier-ignore
import commerceShipPriceNg, {
  CommerceShipPriceNgState
} from 'app/entities/infinityshoporder/commerce-ship-price-ng/commerce-ship-price-ng.reducer';
// prettier-ignore
import commerceOrderPayment, {
  CommerceOrderPaymentState
} from 'app/entities/infinityshoporder/commerce-order-payment/commerce-order-payment.reducer';
// prettier-ignore
import commercePaymentCard, {
  CommercePaymentCardState
} from 'app/entities/infinityshoporder/commerce-payment-card/commerce-payment-card.reducer';
// prettier-ignore
import commerceEPay, {
  CommerceEPayState
} from 'app/entities/infinityshoporder/commerce-e-pay/commerce-e-pay.reducer';
// prettier-ignore
import commerceBillingAddress, {
  CommerceBillingAddressState
} from 'app/entities/infinityshoporder/commerce-billing-address/commerce-billing-address.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly userManagement: UserManagementState;
  readonly register: RegisterState;
  readonly activate: ActivateState;
  readonly passwordReset: PasswordResetState;
  readonly password: PasswordState;
  readonly settings: SettingsState;
  readonly commerceOrder: CommerceOrderState;
  readonly commerceOrderPrice: CommerceOrderPriceState;
  readonly commerceOrderPriceNg: CommerceOrderPriceNgState;
  readonly commerceItem: CommerceItemState;
  readonly commerceItemPrice: CommerceItemPriceState;
  readonly commerceItemPriceNg: CommerceItemPriceNgState;
  readonly commerceShippingContainer: CommerceShippingContainerState;
  readonly commerceShipContainerPrice: CommerceShipContainerPriceState;
  readonly commerceShipPriceNg: CommerceShipPriceNgState;
  readonly commerceOrderPayment: CommerceOrderPaymentState;
  readonly commercePaymentCard: CommercePaymentCardState;
  readonly commerceEPay: CommerceEPayState;
  readonly commerceBillingAddress: CommerceBillingAddressState;
  /* jhipster-needle-add-reducer-type - JHipster will add reducer type here */
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  commerceOrder,
  commerceOrderPrice,
  commerceOrderPriceNg,
  commerceItem,
  commerceItemPrice,
  commerceItemPriceNg,
  commerceShippingContainer,
  commerceShipContainerPrice,
  commerceShipPriceNg,
  commerceOrderPayment,
  commercePaymentCard,
  commerceEPay,
  commerceBillingAddress,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar
});

export default rootReducer;
