import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ICommerceOrderPrice } from 'app/shared/model/infinityshoporder/commerce-order-price.model';
import { getEntities as getCommerceOrderPrices } from 'app/entities/infinityshoporder/commerce-order-price/commerce-order-price.reducer';
import { getEntity, updateEntity, createEntity, reset } from './commerce-order-price-ng.reducer';
import { ICommerceOrderPriceNg } from 'app/shared/model/infinityshoporder/commerce-order-price-ng.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICommerceOrderPriceNgUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ICommerceOrderPriceNgUpdateState {
  isNew: boolean;
  commerceOrderPriceId: number;
}

export class CommerceOrderPriceNgUpdate extends React.Component<ICommerceOrderPriceNgUpdateProps, ICommerceOrderPriceNgUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      commerceOrderPriceId: 0,
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getCommerceOrderPrices();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { commerceOrderPriceNgEntity } = this.props;
      const entity = {
        ...commerceOrderPriceNgEntity,
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
    this.props.history.push('/entity/commerce-order-price-ng');
  };

  render() {
    const { commerceOrderPriceNgEntity, commerceOrderPrices, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="infinityshopApp.infinityshoporderCommerceOrderPriceNg.home.createOrEditLabel">Create or edit a CommerceOrderPriceNg</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : commerceOrderPriceNgEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="commerce-order-price-ng-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="priceLabel" for="price">
                    Price
                  </Label>
                  <AvField
                    id="commerce-order-price-ng-price"
                    type="text"
                    name="price"
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' },
                      number: { value: true, errorMessage: 'This field should be a number.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="ngidLabel" for="ngid">
                    Ngid
                  </Label>
                  <AvField id="commerce-order-price-ng-ngid" type="text" name="ngid" />
                </AvGroup>
                <AvGroup>
                  <Label for="commerceOrderPrice.id">Commerce Order Price</Label>
                  <AvInput
                    id="commerce-order-price-ng-commerceOrderPrice"
                    type="select"
                    className="form-control"
                    name="commerceOrderPriceId"
                  >
                    <option value="" key="0" />
                    {commerceOrderPrices
                      ? commerceOrderPrices.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/commerce-order-price-ng" replace color="info">
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
  commerceOrderPrices: storeState.commerceOrderPrice.entities,
  commerceOrderPriceNgEntity: storeState.commerceOrderPriceNg.entity,
  loading: storeState.commerceOrderPriceNg.loading,
  updating: storeState.commerceOrderPriceNg.updating
});

const mapDispatchToProps = {
  getCommerceOrderPrices,
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
)(CommerceOrderPriceNgUpdate);
