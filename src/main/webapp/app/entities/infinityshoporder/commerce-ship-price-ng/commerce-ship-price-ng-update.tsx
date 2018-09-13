import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ICommerceShipContainerPrice } from 'app/shared/model/infinityshoporder/commerce-ship-container-price.model';
import { getEntities as getCommerceShipContainerPrices } from 'app/entities/infinityshoporder/commerce-ship-container-price/commerce-ship-container-price.reducer';
import { getEntity, updateEntity, createEntity, reset } from './commerce-ship-price-ng.reducer';
import { ICommerceShipPriceNg } from 'app/shared/model/infinityshoporder/commerce-ship-price-ng.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICommerceShipPriceNgUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ICommerceShipPriceNgUpdateState {
  isNew: boolean;
  commerceShipContainerPriceId: number;
}

export class CommerceShipPriceNgUpdate extends React.Component<ICommerceShipPriceNgUpdateProps, ICommerceShipPriceNgUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      commerceShipContainerPriceId: 0,
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getCommerceShipContainerPrices();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { commerceShipPriceNgEntity } = this.props;
      const entity = {
        ...commerceShipPriceNgEntity,
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
    this.props.history.push('/entity/commerce-ship-price-ng');
  };

  render() {
    const { commerceShipPriceNgEntity, commerceShipContainerPrices, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="infinityshopApp.infinityshoporderCommerceShipPriceNg.home.createOrEditLabel">Create or edit a CommerceShipPriceNg</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : commerceShipPriceNgEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="commerce-ship-price-ng-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="priceLabel" for="price">
                    Price
                  </Label>
                  <AvField
                    id="commerce-ship-price-ng-price"
                    type="text"
                    name="price"
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' },
                      number: { value: true, errorMessage: 'This field should be a number.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label for="commerceShipContainerPrice.id">Commerce Ship Container Price</Label>
                  <AvInput
                    id="commerce-ship-price-ng-commerceShipContainerPrice"
                    type="select"
                    className="form-control"
                    name="commerceShipContainerPriceId"
                  >
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
                <Button tag={Link} id="cancel-save" to="/entity/commerce-ship-price-ng" replace color="info">
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
  commerceShipContainerPrices: storeState.commerceShipContainerPrice.entities,
  commerceShipPriceNgEntity: storeState.commerceShipPriceNg.entity,
  loading: storeState.commerceShipPriceNg.loading,
  updating: storeState.commerceShipPriceNg.updating
});

const mapDispatchToProps = {
  getCommerceShipContainerPrices,
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
)(CommerceShipPriceNgUpdate);
