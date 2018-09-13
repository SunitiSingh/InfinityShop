import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ICommerceOrder } from 'app/shared/model/infinityshoporder/commerce-order.model';
import { getEntities as getCommerceOrders } from 'app/entities/infinityshoporder/commerce-order/commerce-order.reducer';
import { ICommercePaymentCard } from 'app/shared/model/infinityshoporder/commerce-payment-card.model';
import { getEntities as getCommercePaymentCards } from 'app/entities/infinityshoporder/commerce-payment-card/commerce-payment-card.reducer';
import { ICommerceEPay } from 'app/shared/model/infinityshoporder/commerce-e-pay.model';
import { getEntities as getCommerceEPays } from 'app/entities/infinityshoporder/commerce-e-pay/commerce-e-pay.reducer';
import { ICommerceBillingAddress } from 'app/shared/model/infinityshoporder/commerce-billing-address.model';
import { getEntities as getCommerceBillingAddresses } from 'app/entities/infinityshoporder/commerce-billing-address/commerce-billing-address.reducer';
import { ICommerceItem } from 'app/shared/model/infinityshoporder/commerce-item.model';
import { getEntities as getCommerceItems } from 'app/entities/infinityshoporder/commerce-item/commerce-item.reducer';
import { getEntity, updateEntity, createEntity, reset } from './commerce-order-payment.reducer';
import { ICommerceOrderPayment } from 'app/shared/model/infinityshoporder/commerce-order-payment.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICommerceOrderPaymentUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ICommerceOrderPaymentUpdateState {
  isNew: boolean;
  commerceOrderId: number;
  cardId: number;
  epayId: number;
  billingAddressId: number;
  itemId: number;
}

export class CommerceOrderPaymentUpdate extends React.Component<ICommerceOrderPaymentUpdateProps, ICommerceOrderPaymentUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      commerceOrderId: 0,
      cardId: 0,
      epayId: 0,
      billingAddressId: 0,
      itemId: 0,
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getCommerceOrders();
    this.props.getCommercePaymentCards();
    this.props.getCommerceEPays();
    this.props.getCommerceBillingAddresses();
    this.props.getCommerceItems();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { commerceOrderPaymentEntity } = this.props;
      const entity = {
        ...commerceOrderPaymentEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
      this.handleClose();
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/commerce-order-payment');
  };

  render() {
    const {
      commerceOrderPaymentEntity,
      commerceOrders,
      commercePaymentCards,
      commerceEPays,
      commerceBillingAddresses,
      commerceItems,
      loading,
      updating
    } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="infinityshopApp.infinityshoporderCommerceOrderPayment.home.createOrEditLabel">Create or edit a CommerceOrderPayment</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : commerceOrderPaymentEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="commerce-order-payment-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="paystatusLabel">Paystatus</Label>
                  <AvInput
                    id="commerce-order-payment-paystatus"
                    type="select"
                    className="form-control"
                    name="paystatus"
                    value={(!isNew && commerceOrderPaymentEntity.paystatus) || 'INITIAL'}
                  >
                    <option value="INITIAL">INITIAL</option>
                    <option value="AUTHORIZED">AUTHORIZED</option>
                    <option value="SETTLED">SETTLED</option>
                    <option value="AUTH_FAILED">AUTH_FAILED</option>
                    <option value="SETTLE_FAILED">SETTLE_FAILED</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="paymentAmountLabel" for="paymentAmount">
                    Payment Amount
                  </Label>
                  <AvField id="commerce-order-payment-paymentAmount" type="text" name="paymentAmount" />
                </AvGroup>
                <AvGroup>
                  <Label id="paymentTypeLabel">Payment Type</Label>
                  <AvInput
                    id="commerce-order-payment-paymentType"
                    type="select"
                    className="form-control"
                    name="paymentType"
                    value={(!isNew && commerceOrderPaymentEntity.paymentType) || 'CARD'}
                  >
                    <option value="CARD">CARD</option>
                    <option value="EPAY">EPAY</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="firstNameLabel" for="firstName">
                    First Name
                  </Label>
                  <AvField id="commerce-order-payment-firstName" type="text" name="firstName" />
                </AvGroup>
                <AvGroup>
                  <Label id="lastNameLabel" for="lastName">
                    Last Name
                  </Label>
                  <AvField id="commerce-order-payment-lastName" type="text" name="lastName" />
                </AvGroup>
                <AvGroup>
                  <Label id="billingPhoneLabel" for="billingPhone">
                    Billing Phone
                  </Label>
                  <AvField id="commerce-order-payment-billingPhone" type="text" name="billingPhone" />
                </AvGroup>
                <AvGroup>
                  <Label for="commerceOrder.id">Commerce Order</Label>
                  <AvInput id="commerce-order-payment-commerceOrder" type="select" className="form-control" name="commerceOrderId">
                    <option value="" key="0" />
                    {commerceOrders
                      ? commerceOrders.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="card.id">Card</Label>
                  <AvInput id="commerce-order-payment-card" type="select" className="form-control" name="cardId">
                    <option value="" key="0" />
                    {commercePaymentCards
                      ? commercePaymentCards.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="epay.id">Epay</Label>
                  <AvInput id="commerce-order-payment-epay" type="select" className="form-control" name="epayId">
                    <option value="" key="0" />
                    {commerceEPays
                      ? commerceEPays.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="billingAddress.id">Billing Address</Label>
                  <AvInput id="commerce-order-payment-billingAddress" type="select" className="form-control" name="billingAddressId">
                    <option value="" key="0" />
                    {commerceBillingAddresses
                      ? commerceBillingAddresses.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/commerce-order-payment" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />&nbsp;
                  <span className="d-none d-md-inline">Back</span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />&nbsp; Save
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  commerceOrders: storeState.commerceOrder.entities,
  commercePaymentCards: storeState.commercePaymentCard.entities,
  commerceEPays: storeState.commerceEPay.entities,
  commerceBillingAddresses: storeState.commerceBillingAddress.entities,
  commerceItems: storeState.commerceItem.entities,
  commerceOrderPaymentEntity: storeState.commerceOrderPayment.entity,
  loading: storeState.commerceOrderPayment.loading,
  updating: storeState.commerceOrderPayment.updating
});

const mapDispatchToProps = {
  getCommerceOrders,
  getCommercePaymentCards,
  getCommerceEPays,
  getCommerceBillingAddresses,
  getCommerceItems,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceOrderPaymentUpdate);
