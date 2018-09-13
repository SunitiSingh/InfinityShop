import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './commerce-item-price-ng.reducer';
import { ICommerceItemPriceNg } from 'app/shared/model/infinityshoporder/commerce-item-price-ng.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceItemPriceNgProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class CommerceItemPriceNg extends React.Component<ICommerceItemPriceNgProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { commerceItemPriceNgList, match } = this.props;
    return (
      <div>
        <h2 id="commerce-item-price-ng-heading">
          Commerce Item Price Ngs
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp; Create new Commerce Item Price Ng
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Price</th>
                <th>Ngid</th>
                <th>Commerce Item Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {commerceItemPriceNgList.map((commerceItemPriceNg, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${commerceItemPriceNg.id}`} color="link" size="sm">
                      {commerceItemPriceNg.id}
                    </Button>
                  </td>
                  <td>{commerceItemPriceNg.price}</td>
                  <td>{commerceItemPriceNg.ngid}</td>
                  <td>
                    {commerceItemPriceNg.commerceItemPriceId ? (
                      <Link to={`commerce-item-price/${commerceItemPriceNg.commerceItemPriceId}`}>
                        {commerceItemPriceNg.commerceItemPriceId}
                      </Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${commerceItemPriceNg.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceItemPriceNg.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceItemPriceNg.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ commerceItemPriceNg }: IRootState) => ({
  commerceItemPriceNgList: commerceItemPriceNg.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceItemPriceNg);
