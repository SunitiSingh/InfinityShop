import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction, TextFormat, getSortState, IPaginationBaseState, getPaginationItemsNumber, JhiPagination } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './commerce-item.reducer';
import { ICommerceItem } from 'app/shared/model/infinityshoporder/commerce-item.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface ICommerceItemProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type ICommerceItemState = IPaginationBaseState;

export class CommerceItem extends React.Component<ICommerceItemProps, ICommerceItemState> {
  state: ICommerceItemState = {
    ...getSortState(this.props.location, ITEMS_PER_PAGE)
  };

  componentDidMount() {
    this.getEntities();
  }

  sort = prop => () => {
    this.setState(
      {
        order: this.state.order === 'asc' ? 'desc' : 'asc',
        sort: prop
      },
      () => this.sortEntities()
    );
  };

  sortEntities() {
    this.getEntities();
    this.props.history.push(`${this.props.location.pathname}?page=${this.state.activePage}&sort=${this.state.sort},${this.state.order}`);
  }

  handlePagination = activePage => this.setState({ activePage }, () => this.sortEntities());

  getEntities = () => {
    const { activePage, itemsPerPage, sort, order } = this.state;
    this.props.getEntities(activePage - 1, itemsPerPage, `${sort},${order}`);
  };

  render() {
    const { commerceItemList, match, totalItems } = this.props;
    return (
      <div>
        <h2 id="commerce-item-heading">
          Commerce Items
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp; Create new Commerce Item
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={this.sort('id')}>
                  ID <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('skuid')}>
                  Skuid <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('quantity')}>
                  Quantity <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('creationDate')}>
                  Creation Date <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={this.sort('updateDate')}>
                  Update Date <FontAwesomeIcon icon="sort" />
                </th>
                <th>
                  Commerce Order <FontAwesomeIcon icon="sort" />
                </th>
                <th>
                  Price <FontAwesomeIcon icon="sort" />
                </th>
                <th>
                  Ship Info <FontAwesomeIcon icon="sort" />
                </th>
                <th>
                  Pay Info <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {commerceItemList.map((commerceItem, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${commerceItem.id}`} color="link" size="sm">
                      {commerceItem.id}
                    </Button>
                  </td>
                  <td>{commerceItem.skuid}</td>
                  <td>{commerceItem.quantity}</td>
                  <td>
                    <TextFormat type="date" value={commerceItem.creationDate} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={commerceItem.updateDate} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    {commerceItem.commerceOrderId ? (
                      <Link to={`commerce-order/${commerceItem.commerceOrderId}`}>{commerceItem.commerceOrderId}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {commerceItem.priceId ? <Link to={`commerce-item-price/${commerceItem.priceId}`}>{commerceItem.priceId}</Link> : ''}
                  </td>
                  <td>
                    {commerceItem.shipInfoId ? (
                      <Link to={`commerce-item-ship-info/${commerceItem.shipInfoId}`}>{commerceItem.shipInfoId}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {commerceItem.payInfoId ? (
                      <Link to={`commerce-item-pay-info/${commerceItem.payInfoId}`}>{commerceItem.payInfoId}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${commerceItem.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceItem.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${commerceItem.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <Row className="justify-content-center">
          <JhiPagination
            items={getPaginationItemsNumber(totalItems, this.state.itemsPerPage)}
            activePage={this.state.activePage}
            onSelect={this.handlePagination}
            maxButtons={5}
          />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ commerceItem }: IRootState) => ({
  commerceItemList: commerceItem.entities,
  totalItems: commerceItem.totalItems
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceItem);
