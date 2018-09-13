import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './commerce-billing-address.reducer';
import { ICommerceBillingAddress } from 'app/shared/model/infinityshoporder/commerce-billing-address.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceBillingAddressDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceBillingAddressDetail extends React.Component<ICommerceBillingAddressDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { commerceBillingAddressEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            CommerceBillingAddress [<b>{commerceBillingAddressEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="address1">Address 1</span>
            </dt>
            <dd>{commerceBillingAddressEntity.address1}</dd>
            <dt>
              <span id="address2">Address 2</span>
            </dt>
            <dd>{commerceBillingAddressEntity.address2}</dd>
            <dt>
              <span id="city">City</span>
            </dt>
            <dd>{commerceBillingAddressEntity.city}</dd>
            <dt>
              <span id="postalcode">Postalcode</span>
            </dt>
            <dd>{commerceBillingAddressEntity.postalcode}</dd>
            <dt>
              <span id="createDate">Create Date</span>
            </dt>
            <dd>
              <TextFormat value={commerceBillingAddressEntity.createDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="updateDate">Update Date</span>
            </dt>
            <dd>
              <TextFormat value={commerceBillingAddressEntity.updateDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
          </dl>
          <Button tag={Link} to="/entity/commerce-billing-address" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/commerce-billing-address/${commerceBillingAddressEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ commerceBillingAddress }: IRootState) => ({
  commerceBillingAddressEntity: commerceBillingAddress.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceBillingAddressDetail);
