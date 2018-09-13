import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './commerce-billing-address.reducer';
import { ICommerceBillingAddress } from 'app/shared/model/infinityshoporder/commerce-billing-address.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICommerceBillingAddressUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface ICommerceBillingAddressUpdateState {
  isNew: boolean;
}

export class CommerceBillingAddressUpdate extends React.Component<ICommerceBillingAddressUpdateProps, ICommerceBillingAddressUpdateState> {
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
      const { commerceBillingAddressEntity } = this.props;
      const entity = {
        ...commerceBillingAddressEntity,
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
    this.props.history.push('/entity/commerce-billing-address');
  };

  render() {
    const { commerceBillingAddressEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="infinityshopApp.infinityshoporderCommerceBillingAddress.home.createOrEditLabel">
              Create or edit a CommerceBillingAddress
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : commerceBillingAddressEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">ID</Label>
                    <AvInput id="commerce-billing-address-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="address1Label" for="address1">
                    Address 1
                  </Label>
                  <AvField id="commerce-billing-address-address1" type="text" name="address1" />
                </AvGroup>
                <AvGroup>
                  <Label id="address2Label" for="address2">
                    Address 2
                  </Label>
                  <AvField id="commerce-billing-address-address2" type="text" name="address2" />
                </AvGroup>
                <AvGroup>
                  <Label id="cityLabel" for="city">
                    City
                  </Label>
                  <AvField id="commerce-billing-address-city" type="text" name="city" />
                </AvGroup>
                <AvGroup>
                  <Label id="postalcodeLabel" for="postalcode">
                    Postalcode
                  </Label>
                  <AvField id="commerce-billing-address-postalcode" type="text" name="postalcode" />
                </AvGroup>
                <AvGroup>
                  <Label id="createDateLabel" for="createDate">
                    Create Date
                  </Label>
                  <AvInput
                    id="commerce-billing-address-createDate"
                    type="datetime-local"
                    className="form-control"
                    name="createDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.commerceBillingAddressEntity.createDate)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="updateDateLabel" for="updateDate">
                    Update Date
                  </Label>
                  <AvInput
                    id="commerce-billing-address-updateDate"
                    type="datetime-local"
                    className="form-control"
                    name="updateDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.commerceBillingAddressEntity.updateDate)}
                  />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/commerce-billing-address" replace color="info">
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
  commerceBillingAddressEntity: storeState.commerceBillingAddress.entity,
  loading: storeState.commerceBillingAddress.loading,
  updating: storeState.commerceBillingAddress.updating
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
)(CommerceBillingAddressUpdate);
