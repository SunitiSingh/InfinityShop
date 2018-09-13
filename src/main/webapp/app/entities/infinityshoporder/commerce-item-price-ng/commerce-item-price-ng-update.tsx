import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ICommerceItemPrice } from 'app/shared/model/infinityshoporder/commerce-item-price.model';
import { getEntities as getCommerceItemPrices } from 'app/entities/infinityshoporder/commerce-item-price/commerce-item-price.reducer';
import { getEntity, updateEntity, createEntity, reset } from './commerce-item-price-ng.reducer';
import { ICommerceItemPriceNg } from 'app/shared/model/infinityshoporder/commerce-item-price-ng.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICommerceItemPriceNgUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ICommerceItemPriceNgUpdateState {
  isNew: boolean;
  commerceItemPriceId: number;
}

export class CommerceItemPriceNgUpdate extends React.Component<ICommerceItemPriceNgUpdateProps, ICommerceItemPriceNgUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      commerceItemPriceId: 0,
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getCommerceItemPrices();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { commerceItemPriceNgEntity } = this.props;
      const entity = {
        ...commerceItemPriceNgEntity,
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
    this.props.history.push('/entity/commerce-item-price-ng');
  };

  render() {
    const { commerceItemPriceNgEntity, commerceItemPrices, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="infinityshopApp.infinityshoporderCommerceItemPriceNg.home.createOrEditLabel">Create or edit a CommerceItemPriceNg</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : commerceItemPriceNgEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="commerce-item-price-ng-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="priceLabel" for="price">
                    Price
                  </Label>
                  <AvField
                    id="commerce-item-price-ng-price"
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
                  <AvField id="commerce-item-price-ng-ngid" type="text" name="ngid" />
                </AvGroup>
                <AvGroup>
                  <Label for="commerceItemPrice.id">Commerce Item Price</Label>
                  <AvInput id="commerce-item-price-ng-commerceItemPrice" type="select" className="form-control" name="commerceItemPriceId">
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
                <Button tag={Link} id="cancel-save" to="/entity/commerce-item-price-ng" replace color="info">
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
  commerceItemPrices: storeState.commerceItemPrice.entities,
  commerceItemPriceNgEntity: storeState.commerceItemPriceNg.entity,
  loading: storeState.commerceItemPriceNg.loading,
  updating: storeState.commerceItemPriceNg.updating
});

const mapDispatchToProps = {
  getCommerceItemPrices,
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
)(CommerceItemPriceNgUpdate);
