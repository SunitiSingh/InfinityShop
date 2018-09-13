import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './commerce-shipping-container.reducer';
import { ICommerceShippingContainer } from 'app/shared/model/infinityshoporder/commerce-shipping-container.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceShippingContainerProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class CommerceShippingContainer extends React.Component<ICommerceShippingContainerProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { commerceShippingContainerList, match } = this.props;
    return (
      <div>
        <h2 id="commerce-shipping-container-heading">
          Commerce Shipping Containers
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp; Create new Commerce Shipping Container
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Shipstatus</th>
                <th>Carrier</th>
                <th>Creation Date</th>
                <th>Update Date</th>
                <th>Commerce Order</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {commerceShippingContainerList.map((commerceShippingContainer, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${commerceShippingContainer.id}`} color="link" size="sm">
                      {commerceShippingContainer.id}
                    </Button>
                  </td>
                  <td>{commerceShippingContainer.shipstatus}</td>
                  <td>{commerceShippingContainer.carrier}</td>
                  <td>
                    <TextFormat type="date" value={commerceShippingContainer.creationDate} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={commerceShippingContainer.updateDate} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    {commerceShippingContainer.commerceOrderId ? (
                      <Link to={`commerce-order/${commerceShippingContainer.commerceOrderId}`}>
                        {commerceShippingContainer.commerceOrderId}
                      </Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {commerceShippingContainer.priceId ? (
                      <Link to={`commerce-ship-container-price/${commerceShippingContainer.priceId}`}>
                        {commerceShippingContainer.priceId}
                      </Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${commerceShippingContainer.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceShippingContainer.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceShippingContainer.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ commerceShippingContainer }: IRootState) => ({
  commerceShippingContainerList: commerceShippingContainer.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceShippingContainer);
