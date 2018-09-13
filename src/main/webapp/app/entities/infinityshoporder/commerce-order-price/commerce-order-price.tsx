import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './commerce-order-price.reducer';
import { ICommerceOrderPrice } from 'app/shared/model/infinityshoporder/commerce-order-price.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceOrderPriceProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class CommerceOrderPrice extends React.Component<ICommerceOrderPriceProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { commerceOrderPriceList, match } = this.props;
    return (
      <div>
        <h2 id="commerce-order-price-heading">
          Commerce Order Prices
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp; Create new Commerce Order Price
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Commerce Order</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {commerceOrderPriceList.map((commerceOrderPrice, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${commerceOrderPrice.id}`} color="link" size="sm">
                      {commerceOrderPrice.id}
                    </Button>
                  </td>
                  <td>{commerceOrderPrice.name}</td>
                  <td>{commerceOrderPrice.price}</td>
                  <td>
                    {commerceOrderPrice.commerceOrderId ? (
                      <Link to={`commerce-order/${commerceOrderPrice.commerceOrderId}`}>{commerceOrderPrice.commerceOrderId}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${commerceOrderPrice.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceOrderPrice.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceOrderPrice.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ commerceOrderPrice }: IRootState) => ({
  commerceOrderPriceList: commerceOrderPrice.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceOrderPrice);
