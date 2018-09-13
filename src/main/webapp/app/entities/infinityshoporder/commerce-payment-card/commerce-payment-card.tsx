import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './commerce-payment-card.reducer';
import { ICommercePaymentCard } from 'app/shared/model/infinityshoporder/commerce-payment-card.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommercePaymentCardProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class CommercePaymentCard extends React.Component<ICommercePaymentCardProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { commercePaymentCardList, match } = this.props;
    return (
      <div>
        <h2 id="commerce-payment-card-heading">
          Commerce Payment Cards
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp; Create new Commerce Payment Card
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Card Type</th>
                <th>Card Number</th>
                <th>Exp Month</th>
                <th>Exp Year</th>
                <th>Create Date</th>
                <th>Update Date</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {commercePaymentCardList.map((commercePaymentCard, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${commercePaymentCard.id}`} color="link" size="sm">
                      {commercePaymentCard.id}
                    </Button>
                  </td>
                  <td>{commercePaymentCard.cardType}</td>
                  <td>{commercePaymentCard.cardNumber}</td>
                  <td>{commercePaymentCard.expMonth}</td>
                  <td>{commercePaymentCard.expYear}</td>
                  <td>
                    <TextFormat type="date" value={commercePaymentCard.createDate} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={commercePaymentCard.updateDate} format={APP_DATE_FORMAT} />
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${commercePaymentCard.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commercePaymentCard.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commercePaymentCard.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ commercePaymentCard }: IRootState) => ({
  commercePaymentCardList: commercePaymentCard.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommercePaymentCard);
