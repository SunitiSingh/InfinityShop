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
import { ICommerceShipContainerPrice } from 'app/shared/model/infinityshoporder/commerce-ship-container-price.model';
import { getEntities as getCommerceShipContainerPrices } from 'app/entities/infinityshoporder/commerce-ship-container-price/commerce-ship-container-price.reducer';
import { ICommerceItem } from 'app/shared/model/infinityshoporder/commerce-item.model';
import { getEntities as getCommerceItems } from 'app/entities/infinityshoporder/commerce-item/commerce-item.reducer';
import { getEntity, updateEntity, createEntity, reset } from './commerce-shipping-container.reducer';
import { ICommerceShippingContainer } from 'app/shared/model/infinityshoporder/commerce-shipping-container.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICommerceShippingContainerUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ICommerceShippingContainerUpdateState {
  isNew: boolean;
  commerceOrderId: number;
  priceId: number;
  itemId: number;
}

export class CommerceShippingContainerUpdate extends React.Component<
  ICommerceShippingContainerUpdateProps,
  ICommerceShippingContainerUpdateState
> {
  constructor(props) {
    super(props);
    this.state = {
      commerceOrderId: 0,
      priceId: 0,
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
    this.props.getCommerceShipContainerPrices();
    this.props.getCommerceItems();
  }

  saveEntity = (event, errors, values) => {
    values.creationDate = new Date(values.creationDate);
    values.updateDate = new Date(values.updateDate);

    if (errors.length === 0) {
      const { commerceShippingContainerEntity } = this.props;
      const entity = {
        ...commerceShippingContainerEntity,
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
    this.props.history.push('/entity/commerce-shipping-container');
  };

  render() {
    const { commerceShippingContainerEntity, commerceOrders, commerceShipContainerPrices, commerceItems, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="infinityshopApp.infinityshoporderCommerceShippingContainer.home.createOrEditLabel">
              Create or edit a CommerceShippingContainer
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : commerceShippingContainerEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="commerce-shipping-container-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="shipstatusLabel">Shipstatus</Label>
                  <AvInput
                    id="commerce-shipping-container-shipstatus"
                    type="select"
                    className="form-control"
                    name="shipstatus"
                    value={(!isNew && commerceShippingContainerEntity.shipstatus) || 'INIT'}
                  >
                    <option value="INIT">INIT</option>
                    <option value="DROPPED">DROPPED</option>
                    <option value="CANT_SHIP">CANT_SHIP</option>
                    <option value="PARTIALLY_SHIPPED">PARTIALLY_SHIPPED</option>
                    <option value="SHIPPED">SHIPPED</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="carrierLabel" for="carrier">
                    Carrier
                  </Label>
                  <AvField id="commerce-shipping-container-carrier" type="text" name="carrier" />
                </AvGroup>
                <AvGroup>
                  <Label id="creationDateLabel" for="creationDate">
                    Creation Date
                  </Label>
                  <AvInput
                    id="commerce-shipping-container-creationDate"
                    type="datetime-local"
                    className="form-control"
                    name="creationDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.commerceShippingContainerEntity.creationDate)}
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
                    id="commerce-shipping-container-updateDate"
                    type="datetime-local"
                    className="form-control"
                    name="updateDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.commerceShippingContainerEntity.updateDate)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label for="commerceOrder.id">Commerce Order</Label>
                  <AvInput id="commerce-shipping-container-commerceOrder" type="select" className="form-control" name="commerceOrderId">
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
                  <AvInput id="commerce-shipping-container-price" type="select" className="form-control" name="priceId">
                    <option value="" key="0" />
                    {commerceShipContainerPrices
                      ? commerceShipContainerPrices.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/commerce-shipping-container" replace color="info">
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
  commerceShipContainerPrices: storeState.commerceShipContainerPrice.entities,
  commerceItems: storeState.commerceItem.entities,
  commerceShippingContainerEntity: storeState.commerceShippingContainer.entity,
  loading: storeState.commerceShippingContainer.loading,
  updating: storeState.commerceShippingContainer.updating
});

const mapDispatchToProps = {
  getCommerceOrders,
  getCommerceShipContainerPrices,
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
)(CommerceShippingContainerUpdate);
