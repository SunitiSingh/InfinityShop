import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './commerce-billing-address.reducer';
import { ICommerceBillingAddress } from 'app/shared/model/infinityshoporder/commerce-billing-address.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceBillingAddressProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class CommerceBillingAddress extends React.Component<ICommerceBillingAddressProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { commerceBillingAddressList, match } = this.props;
    return (
      <div>
        <h2 id="commerce-billing-address-heading">
          Commerce Billing Addresses
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp; Create new Commerce Billing Address
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Address 1</th>
                <th>Address 2</th>
                <th>City</th>
                <th>Postalcode</th>
                <th>Create Date</th>
                <th>Update Date</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {commerceBillingAddressList.map((commerceBillingAddress, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${commerceBillingAddress.id}`} color="link" size="sm">
                      {commerceBillingAddress.id}
                    </Button>
                  </td>
                  <td>{commerceBillingAddress.address1}</td>
                  <td>{commerceBillingAddress.address2}</td>
                  <td>{commerceBillingAddress.city}</td>
                  <td>{commerceBillingAddress.postalcode}</td>
                  <td>
                    <TextFormat type="date" value={commerceBillingAddress.createDate} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={commerceBillingAddress.updateDate} format={APP_DATE_FORMAT} />
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${commerceBillingAddress.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceBillingAddress.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceBillingAddress.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ commerceBillingAddress }: IRootState) => ({
  commerceBillingAddressList: commerceBillingAddress.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceBillingAddress);
