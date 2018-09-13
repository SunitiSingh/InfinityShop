import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './commerce-order-payment.reducer';
import { ICommerceOrderPayment } from 'app/shared/model/infinityshoporder/commerce-order-payment.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceOrderPaymentDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceOrderPaymentDetail extends React.Component<ICommerceOrderPaymentDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { commerceOrderPaymentEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            CommerceOrderPayment [<b>{commerceOrderPaymentEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="paystatus">Paystatus</span>
            </dt>
            <dd>{commerceOrderPaymentEntity.paystatus}</dd>
            <dt>
              <span id="paymentAmount">Payment Amount</span>
            </dt>
            <dd>{commerceOrderPaymentEntity.paymentAmount}</dd>
            <dt>
              <span id="paymentType">Payment Type</span>
            </dt>
            <dd>{commerceOrderPaymentEntity.paymentType}</dd>
            <dt>
              <span id="firstName">First Name</span>
            </dt>
            <dd>{commerceOrderPaymentEntity.firstName}</dd>
            <dt>
              <span id="lastName">Last Name</span>
            </dt>
            <dd>{commerceOrderPaymentEntity.lastName}</dd>
            <dt>
              <span id="billingPhone">Billing Phone</span>
            </dt>
            <dd>{commerceOrderPaymentEntity.billingPhone}</dd>
            <dt>Commerce Order</dt>
            <dd>{commerceOrderPaymentEntity.commerceOrderId ? commerceOrderPaymentEntity.commerceOrderId : ''}</dd>
            <dt>Card</dt>
            <dd>{commerceOrderPaymentEntity.cardId ? commerceOrderPaymentEntity.cardId : ''}</dd>
            <dt>Epay</dt>
            <dd>{commerceOrderPaymentEntity.epayId ? commerceOrderPaymentEntity.epayId : ''}</dd>
            <dt>Billing Address</dt>
            <dd>{commerceOrderPaymentEntity.billingAddressId ? commerceOrderPaymentEntity.billingAddressId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/commerce-order-payment" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/commerce-order-payment/${commerceOrderPaymentEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ commerceOrderPayment }: IRootState) => ({
  commerceOrderPaymentEntity: commerceOrderPayment.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceOrderPaymentDetail);
