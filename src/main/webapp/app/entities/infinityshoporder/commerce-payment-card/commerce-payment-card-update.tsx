import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './commerce-payment-card.reducer';
import { ICommercePaymentCard } from 'app/shared/model/infinityshoporder/commerce-payment-card.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICommercePaymentCardUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ICommercePaymentCardUpdateState {
  isNew: boolean;
}

export class CommercePaymentCardUpdate extends React.Component<ICommercePaymentCardUpdateProps, ICommercePaymentCardUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }
  }

  saveEntity = (event, errors, values) => {
    values.createDate = new Date(values.createDate);
    values.updateDate = new Date(values.updateDate);

    if (errors.length === 0) {
      const { commercePaymentCardEntity } = this.props;
      const entity = {
        ...commercePaymentCardEntity,
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
    this.props.history.push('/entity/commerce-payment-card');
  };

  render() {
    const { commercePaymentCardEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="infinityshopApp.infinityshoporderCommercePaymentCard.home.createOrEditLabel">Create or edit a CommercePaymentCard</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : commercePaymentCardEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="commerce-payment-card-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="cardTypeLabel" for="cardType">
                    Card Type
                  </Label>
                  <AvField id="commerce-payment-card-cardType" type="text" name="cardType" />
                </AvGroup>
                <AvGroup>
                  <Label id="cardNumberLabel" for="cardNumber">
                    Card Number
                  </Label>
                  <AvField id="commerce-payment-card-cardNumber" type="text" name="cardNumber" />
                </AvGroup>
                <AvGroup>
                  <Label id="expMonthLabel" for="expMonth">
                    Exp Month
                  </Label>
                  <AvField id="commerce-payment-card-expMonth" type="number" className="form-control" name="expMonth" />
                </AvGroup>
                <AvGroup>
                  <Label id="expYearLabel" for="expYear">
                    Exp Year
                  </Label>
                  <AvField id="commerce-payment-card-expYear" type="number" className="form-control" name="expYear" />
                </AvGroup>
                <AvGroup>
                  <Label id="createDateLabel" for="createDate">
                    Create Date
                  </Label>
                  <AvInput
                    id="commerce-payment-card-createDate"
                    type="datetime-local"
                    className="form-control"
                    name="createDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.commercePaymentCardEntity.createDate)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="updateDateLabel" for="updateDate">
                    Update Date
                  </Label>
                  <AvInput
                    id="commerce-payment-card-updateDate"
                    type="datetime-local"
                    className="form-control"
                    name="updateDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.commercePaymentCardEntity.updateDate)}
                  />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/commerce-payment-card" replace color="info">
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
  commercePaymentCardEntity: storeState.commercePaymentCard.entity,
  loading: storeState.commercePaymentCard.loading,
  updating: storeState.commercePaymentCard.updating
});

const mapDispatchToProps = {
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
)(CommercePaymentCardUpdate);
