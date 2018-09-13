import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './commerce-order.reducer';
import { ICommerceOrder } from 'app/shared/model/infinityshoporder/commerce-order.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICommerceOrderUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ICommerceOrderUpdateState {
  isNew: boolean;
}

export class CommerceOrderUpdate extends React.Component<ICommerceOrderUpdateProps, ICommerceOrderUpdateState> {
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
    values.creationDate = new Date(values.creationDate);
    values.placedDate = new Date(values.placedDate);
    values.updateDate = new Date(values.updateDate);

    if (errors.length === 0) {
      const { commerceOrderEntity } = this.props;
      const entity = {
        ...commerceOrderEntity,
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
    this.props.history.push('/entity/commerce-order');
  };

  render() {
    const { commerceOrderEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="infinityshopApp.infinityshoporderCommerceOrder.home.createOrEditLabel">Create or edit a CommerceOrder</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : commerceOrderEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="commerce-order-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="statusLabel">Status</Label>
                  <AvInput
                    id="commerce-order-status"
                    type="select"
                    className="form-control"
                    name="status"
                    value={(!isNew && commerceOrderEntity.status) || 'CART'}
                  >
                    <option value="CART">CART</option>
                    <option value="PLACED">PLACED</option>
                    <option value="SHIPPED">SHIPPED</option>
                    <option value="PARTIALLY_SHIPPED">PARTIALLY_SHIPPED</option>
                    <option value="SETTLED">SETTLED</option>
                    <option value="RETURNED">RETURNED</option>
                    <option value="PARTIALLY_RETURNED">PARTIALLY_RETURNED</option>
                    <option value="CLOSED">CLOSED</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="custidLabel" for="custid">
                    Custid
                  </Label>
                  <AvField
                    id="commerce-order-custid"
                    type="text"
                    name="custid"
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="creationDateLabel" for="creationDate">
                    Creation Date
                  </Label>
                  <AvInput
                    id="commerce-order-creationDate"
                    type="datetime-local"
                    className="form-control"
                    name="creationDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.commerceOrderEntity.creationDate)}
                    validate={{
                      required: { value: true, errorMessage: 'This field is required.' }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="placedDateLabel" for="placedDate">
                    Placed Date
                  </Label>
                  <AvInput
                    id="commerce-order-placedDate"
                    type="datetime-local"
                    className="form-control"
                    name="placedDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.commerceOrderEntity.placedDate)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="updateDateLabel" for="updateDate">
                    Update Date
                  </Label>
                  <AvInput
                    id="commerce-order-updateDate"
                    type="datetime-local"
                    className="form-control"
                    name="updateDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.commerceOrderEntity.updateDate)}
                  />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/commerce-order" replace color="info">
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
  commerceOrderEntity: storeState.commerceOrder.entity,
  loading: storeState.commerceOrder.loading,
  updating: storeState.commerceOrder.updating
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
)(CommerceOrderUpdate);
