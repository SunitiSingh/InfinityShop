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
import { ICommerceItemPrice } from 'app/shared/model/infinityshoporder/commerce-item-price.model';
import { getEntities as getCommerceItemPrices } from 'app/entities/infinityshoporder/commerce-item-price/commerce-item-price.reducer';
import { ICommerceShippingContainer } from 'app/shared/model/infinityshoporder/commerce-shipping-container.model';
import { getEntities as getCommerceShippingContainers } from 'app/entities/infinityshoporder/commerce-shipping-container/commerce-shipping-container.reducer';
import { ICommerceOrderPayment } from 'app/shared/model/infinityshoporder/commerce-order-payment.model';
import { getEntities as getCommerceOrderPayments } from 'app/entities/infinityshoporder/commerce-order-payment/commerce-order-payment.reducer';
import { getEntity, updateEntity, createEntity, reset } from './commerce-item.reducer';
import { ICommerceItem } from 'app/shared/model/infinityshoporder/commerce-item.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICommerceItemUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ICommerceItemUpdateState {
  isNew: boolean;
  idsshipcontainer: any[];
  idspayment: any[];
  commerceOrderId: number;
  priceId: number;
}

export class CommerceItemUpdate extends React.Component<ICommerceItemUpdateProps, ICommerceItemUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      idsshipcontainer: [],
      idspayment: [],
      commerceOrderId: 0,
      priceId: 0,
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
    this.props.getCommerceItemPrices();
    this.props.getCommerceShippingContainers();
    this.props.getCommerceOrderPayments();
  }

  saveEntity = (event, errors, values) => {
    values.creationDate = new Date(values.creationDate);
    values.updateDate = new Date(values.updateDate);

    if (errors.length === 0) {
      const { commerceItemEntity } = this.props;
      const entity = {
        ...commerceItemEntity,
        ...values,
        shipcontainers: mapIdList(values.shipcontainers),
        payments: mapIdList(values.payments)
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
    this.props.history.push('/entity/commerce-item');
  };

  render() {
    const {
      commerceItemEntity,
      commerceOrders,
      commerceItemPrices,
      commerceShippingContainers,
      commerceOrderPayments,
      loading,
      updating
    } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="infinityshopApp.infinityshoporderCommerceItem.home.createOrEditLabel">Create or edit a CommerceItem</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : commerceItemEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="commerce-item-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="skuidLabel" for="skuid">
                    Skuid
                  </Label>
                  <AvField
                    id="commerce-item-skuid"
                    type="text"
                    name="skuid"
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="quantityLabel" for="quantity">
                    Quantity
                  </Label>
                  <AvField
                    id="commerce-item-quantity"
                    type="number"
                    className="form-control"
                    name="quantity"
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' },
                      number: { value: true, errorMessage: 'This field should be a number.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="creationDateLabel" for="creationDate">
                    Creation Date
                  </Label>
                  <AvInput
                    id="commerce-item-creationDate"
                    type="datetime-local"
                    className="form-control"
                    name="creationDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.commerceItemEntity.creationDate)}
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="updateDateLabel" for="updateDate">
                    Update Date
                  </Label>
                  <AvInput
                    id="commerce-item-updateDate"
                    type="datetime-local"
                    className="form-control"
                    name="updateDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.commerceItemEntity.updateDate)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label for="commerceOrder.id">Commerce Order</Label>
                  <AvInput id="commerce-item-commerceOrder" type="select" className="form-control" name="commerceOrderId">
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
                  <Label for="price.id">Price</Label>
                  <AvInput id="commerce-item-price" type="select" className="form-control" name="priceId">
                    <option value="" key="0" />
                    {commerceItemPrices
                      ? commerceItemPrices.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="commerceShippingContainers">Shipcontainer</Label>
                  <AvInput
                    id="commerce-item-shipcontainer"
                    type="select"
                    multiple
                    className="form-control"
                    name="shipcontainers"
                    value={commerceItemEntity.shipcontainers && commerceItemEntity.shipcontainers.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {commerceShippingContainers
                      ? commerceShippingContainers.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.shipstatus}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="commerceOrderPayments">Payment</Label>
                  <AvInput
                    id="commerce-item-payment"
                    type="select"
                    multiple
                    className="form-control"
                    name="payments"
                    value={commerceItemEntity.payments && commerceItemEntity.payments.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {commerceOrderPayments
                      ? commerceOrderPayments.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.paystatus}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/commerce-item" replace color="info">
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
  commerceItemPrices: storeState.commerceItemPrice.entities,
  commerceShippingContainers: storeState.commerceShippingContainer.entities,
  commerceOrderPayments: storeState.commerceOrderPayment.entities,
  commerceItemEntity: storeState.commerceItem.entity,
  loading: storeState.commerceItem.loading,
  updating: storeState.commerceItem.updating
});

const mapDispatchToProps = {
  getCommerceOrders,
  getCommerceItemPrices,
  getCommerceShippingContainers,
  getCommerceOrderPayments,
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
)(CommerceItemUpdate);
