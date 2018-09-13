import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './commerce-order-payment.reducer';
import { ICommerceOrderPayment } from 'app/shared/model/infinityshoporder/commerce-order-payment.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceOrderPaymentProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class CommerceOrderPayment extends React.Component<ICommerceOrderPaymentProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { commerceOrderPaymentList, match } = this.props;
    return (
      <div>
        <h2 id="commerce-order-payment-heading">
          Commerce Order Payments
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp; Create new Commerce Order Payment
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Paystatus</th>
                <th>Payment Amount</th>
                <th>Payment Type</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Billing Phone</th>
                <th>Commerce Order</th>
                <th>Card</th>
                <th>Epay</th>
                <th>Billing Address</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {commerceOrderPaymentList.map((commerceOrderPayment, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${commerceOrderPayment.id}`} color="link" size="sm">
                      {commerceOrderPayment.id}
                    </Button>
                  </td>
                  <td>{commerceOrderPayment.paystatus}</td>
                  <td>{commerceOrderPayment.paymentAmount}</td>
                  <td>{commerceOrderPayment.paymentType}</td>
                  <td>{commerceOrderPayment.firstName}</td>
                  <td>{commerceOrderPayment.lastName}</td>
                  <td>{commerceOrderPayment.billingPhone}</td>
                  <td>
                    {commerceOrderPayment.commerceOrderId ? (
                      <Link to={`commerce-order/${commerceOrderPayment.commerceOrderId}`}>{commerceOrderPayment.commerceOrderId}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {commerceOrderPayment.cardId ? (
                      <Link to={`commerce-payment-card/${commerceOrderPayment.cardId}`}>{commerceOrderPayment.cardId}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {commerceOrderPayment.epayId ? (
                      <Link to={`commerce-e-pay/${commerceOrderPayment.epayId}`}>{commerceOrderPayment.epayId}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {commerceOrderPayment.billingAddressId ? (
                      <Link to={`commerce-billing-address/${commerceOrderPayment.billingAddressId}`}>
                        {commerceOrderPayment.billingAddressId}
                      </Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${commerceOrderPayment.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceOrderPayment.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceOrderPayment.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ commerceOrderPayment }: IRootState) => ({
  commerceOrderPaymentList: commerceOrderPayment.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceOrderPayment);
