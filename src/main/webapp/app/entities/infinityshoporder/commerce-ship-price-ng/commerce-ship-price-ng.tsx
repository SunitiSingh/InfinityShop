import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './commerce-ship-price-ng.reducer';
import { ICommerceShipPriceNg } from 'app/shared/model/infinityshoporder/commerce-ship-price-ng.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceShipPriceNgProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class CommerceShipPriceNg extends React.Component<ICommerceShipPriceNgProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { commerceShipPriceNgList, match } = this.props;
    return (
      <div>
        <h2 id="commerce-ship-price-ng-heading">
          Commerce Ship Price Ngs
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp; Create new Commerce Ship Price Ng
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Price</th>
                <th>Commerce Ship Container Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {commerceShipPriceNgList.map((commerceShipPriceNg, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${commerceShipPriceNg.id}`} color="link" size="sm">
                      {commerceShipPriceNg.id}
                    </Button>
                  </td>
                  <td>{commerceShipPriceNg.price}</td>
                  <td>
                    {commerceShipPriceNg.commerceShipContainerPriceId ? (
                      <Link to={`commerce-ship-container-price/${commerceShipPriceNg.commerceShipContainerPriceId}`}>
                        {commerceShipPriceNg.commerceShipContainerPriceId}
                      </Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${commerceShipPriceNg.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceShipPriceNg.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceShipPriceNg.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ commerceShipPriceNg }: IRootState) => ({
  commerceShipPriceNgList: commerceShipPriceNg.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceShipPriceNg);
