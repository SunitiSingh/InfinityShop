import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ICommerceOrderPayment } from 'app/shared/model/infinityshoporder/commerce-order-payment.model';
import { getEntities as getCommerceOrderPayments } from 'app/entities/infinityshoporder/commerce-order-payment/commerce-order-payment.reducer';
import { getEntity, updateEntity, createEntity, reset } from './commerce-item-pay-info.reducer';
import { ICommerceItemPayInfo } from 'app/shared/model/infinityshoporder/commerce-item-pay-info.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICommerceItemPayInfoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ICommerceItemPayInfoUpdateState {
  isNew: boolean;
  orderPaymentId: number;
}

export class CommerceItemPayInfoUpdate extends React.Component<ICommerceItemPayInfoUpdateProps, ICommerceItemPayInfoUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      orderPaymentId: 0,
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getCommerceOrderPayments();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { commerceItemPayInfoEntity } = this.props;
      const entity = {
        ...commerceItemPayInfoEntity,
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
    this.props.history.push('/entity/commerce-item-pay-info');
  };

  render() {
    const { commerceItemPayInfoEntity, commerceOrderPayments, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="infinityshopApp.infinityshoporderCommerceItemPayInfo.home.createOrEditLabel">Create or edit a CommerceItemPayInfo</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : commerceItemPayInfoEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="commerce-item-pay-info-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="statusLabel">Status</Label>
                  <AvInput
                    id="commerce-item-pay-info-status"
                    type="select"
                    className="form-control"
                    name="status"
                    value={(!isNew && commerceItemPayInfoEntity.status) || 'INIT'}
                  >
                    <option value="INIT">INIT</option>
                    <option value="PAID">PAID</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="quantityLabel" for="quantity">
                    Quantity
                  </Label>
                  <AvField
                    id="commerce-item-pay-info-quantity"
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
                  <Label for="orderPayment.id">Order Payment</Label>
                  <AvInput id="commerce-item-pay-info-orderPayment" type="select" className="form-control" name="orderPaymentId">
                    <option value="" key="0" />
                    {commerceOrderPayments
                      ? commerceOrderPayments.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/commerce-item-pay-info" replace color="info">
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
  commerceOrderPayments: storeState.commerceOrderPayment.entities,
  commerceItemPayInfoEntity: storeState.commerceItemPayInfo.entity,
  loading: storeState.commerceItemPayInfo.loading,
  updating: storeState.commerceItemPayInfo.updating
});

const mapDispatchToProps = {
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
)(CommerceItemPayInfoUpdate);
