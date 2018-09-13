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
import { getEntity, updateEntity, createEntity, reset } from './commerce-order-price.reducer';
import { ICommerceOrderPrice } from 'app/shared/model/infinityshoporder/commerce-order-price.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICommerceOrderPriceUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ICommerceOrderPriceUpdateState {
  isNew: boolean;
  commerceOrderId: number;
}

export class CommerceOrderPriceUpdate extends React.Component<ICommerceOrderPriceUpdateProps, ICommerceOrderPriceUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      commerceOrderId: 0,
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
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { commerceOrderPriceEntity } = this.props;
      const entity = {
        ...commerceOrderPriceEntity,
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
    this.props.history.push('/entity/commerce-order-price');
  };

  render() {
    const { commerceOrderPriceEntity, commerceOrders, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="infinityshopApp.infinityshoporderCommerceOrderPrice.home.createOrEditLabel">Create or edit a CommerceOrderPrice</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : commerceOrderPriceEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="commerce-order-price-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="nameLabel" for="name">
                    Name
                  </Label>
                  <AvField id="commerce-order-price-name" type="text" name="name" />
                </AvGroup>
                <AvGroup>
                  <Label id="priceLabel" for="price">
                    Price
                  </Label>
                  <AvField
                    id="commerce-order-price-price"
                    type="text"
                    name="price"
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' },
                      number: { value: true, errorMessage: 'This field should be a number.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label for="commerceOrder.id">Commerce Order</Label>
                  <AvInput id="commerce-order-price-commerceOrder" type="select" className="form-control" name="commerceOrderId">
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
                <Button tag={Link} id="cancel-save" to="/entity/commerce-order-price" replace color="info">
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
  commerceOrderPriceEntity: storeState.commerceOrderPrice.entity,
  loading: storeState.commerceOrderPrice.loading,
  updating: storeState.commerceOrderPrice.updating
});

const mapDispatchToProps = {
  getCommerceOrders,
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
)(CommerceOrderPriceUpdate);
