import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './commerce-order-price-ng.reducer';
import { ICommerceOrderPriceNg } from 'app/shared/model/infinityshoporder/commerce-order-price-ng.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceOrderPriceNgProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class CommerceOrderPriceNg extends React.Component<ICommerceOrderPriceNgProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { commerceOrderPriceNgList, match } = this.props;
    return (
      <div>
        <h2 id="commerce-order-price-ng-heading">
          Commerce Order Price Ngs
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp; Create new Commerce Order Price Ng
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Price</th>
                <th>Ngid</th>
                <th>Commerce Order Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {commerceOrderPriceNgList.map((commerceOrderPriceNg, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${commerceOrderPriceNg.id}`} color="link" size="sm">
                      {commerceOrderPriceNg.id}
                    </Button>
                  </td>
                  <td>{commerceOrderPriceNg.price}</td>
                  <td>{commerceOrderPriceNg.ngid}</td>
                  <td>
                    {commerceOrderPriceNg.commerceOrderPriceId ? (
                      <Link to={`commerce-order-price/${commerceOrderPriceNg.commerceOrderPriceId}`}>
                        {commerceOrderPriceNg.commerceOrderPriceId}
                      </Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${commerceOrderPriceNg.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceOrderPriceNg.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceOrderPriceNg.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ commerceOrderPriceNg }: IRootState) => ({
  commerceOrderPriceNgList: commerceOrderPriceNg.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceOrderPriceNg);
