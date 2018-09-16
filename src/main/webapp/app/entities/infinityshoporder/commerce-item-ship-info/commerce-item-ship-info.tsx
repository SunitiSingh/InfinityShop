import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './commerce-item-ship-info.reducer';
import { ICommerceItemShipInfo } from 'app/shared/model/infinityshoporder/commerce-item-ship-info.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceItemShipInfoProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class CommerceItemShipInfo extends React.Component<ICommerceItemShipInfoProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { commerceItemShipInfoList, match } = this.props;
    return (
      <div>
        <h2 id="commerce-item-ship-info-heading">
          Commerce Item Ship Infos
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp; Create new Commerce Item Ship Info
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Quantity</th>
                <th>Ship Container</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {commerceItemShipInfoList.map((commerceItemShipInfo, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${commerceItemShipInfo.id}`} color="link" size="sm">
                      {commerceItemShipInfo.id}
                    </Button>
                  </td>
                  <td>{commerceItemShipInfo.status}</td>
                  <td>{commerceItemShipInfo.quantity}</td>
                  <td>
                    {commerceItemShipInfo.shipContainerId ? (
                      <Link to={`commerce-shipping-container/${commerceItemShipInfo.shipContainerId}`}>
                        {commerceItemShipInfo.shipContainerId}
                      </Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${commerceItemShipInfo.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceItemShipInfo.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceItemShipInfo.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ commerceItemShipInfo }: IRootState) => ({
  commerceItemShipInfoList: commerceItemShipInfo.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceItemShipInfo);
