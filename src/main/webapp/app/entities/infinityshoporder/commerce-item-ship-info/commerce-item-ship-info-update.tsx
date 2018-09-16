import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ICommerceShippingContainer } from 'app/shared/model/infinityshoporder/commerce-shipping-container.model';
import { getEntities as getCommerceShippingContainers } from 'app/entities/infinityshoporder/commerce-shipping-container/commerce-shipping-container.reducer';
import { getEntity, updateEntity, createEntity, reset } from './commerce-item-ship-info.reducer';
import { ICommerceItemShipInfo } from 'app/shared/model/infinityshoporder/commerce-item-ship-info.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICommerceItemShipInfoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ICommerceItemShipInfoUpdateState {
  isNew: boolean;
  shipContainerId: number;
}

export class CommerceItemShipInfoUpdate extends React.Component<ICommerceItemShipInfoUpdateProps, ICommerceItemShipInfoUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      shipContainerId: 0,
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getCommerceShippingContainers();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { commerceItemShipInfoEntity } = this.props;
      const entity = {
        ...commerceItemShipInfoEntity,
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
    this.props.history.push('/entity/commerce-item-ship-info');
  };

  render() {
    const { commerceItemShipInfoEntity, commerceShippingContainers, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="infinityshopApp.infinityshoporderCommerceItemShipInfo.home.createOrEditLabel">Create or edit a CommerceItemShipInfo</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : commerceItemShipInfoEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="commerce-item-ship-info-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="statusLabel">Status</Label>
                  <AvInput
                    id="commerce-item-ship-info-status"
                    type="select"
                    className="form-control"
                    name="status"
                    value={(!isNew && commerceItemShipInfoEntity.status) || 'INIT'}
                  >
                    <option value="INIT">INIT</option>
                    <option value="SHIPPED">SHIPPED</option>
                    <option value="UNAVAILABLE">UNAVAILABLE</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="quantityLabel" for="quantity">
                    Quantity
                  </Label>
                  <AvField
                    id="commerce-item-ship-info-quantity"
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
                  <Label for="shipContainer.id">Ship Container</Label>
                  <AvInput id="commerce-item-ship-info-shipContainer" type="select" className="form-control" name="shipContainerId">
                    <option value="" key="0" />
                    {commerceShippingContainers
                      ? commerceShippingContainers.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/commerce-item-ship-info" replace color="info">
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
  commerceShippingContainers: storeState.commerceShippingContainer.entities,
  commerceItemShipInfoEntity: storeState.commerceItemShipInfo.entity,
  loading: storeState.commerceItemShipInfo.loading,
  updating: storeState.commerceItemShipInfo.updating
});

const mapDispatchToProps = {
  getCommerceShippingContainers,
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
)(CommerceItemShipInfoUpdate);
