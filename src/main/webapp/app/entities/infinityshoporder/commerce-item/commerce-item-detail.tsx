import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './commerce-item.reducer';
import { ICommerceItem } from 'app/shared/model/infinityshoporder/commerce-item.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceItemDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceItemDetail extends React.Component<ICommerceItemDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { commerceItemEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            CommerceItem [<b>{commerceItemEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="skuid">Skuid</span>
            </dt>
            <dd>{commerceItemEntity.skuid}</dd>
            <dt>
              <span id="quantity">Quantity</span>
            </dt>
            <dd>{commerceItemEntity.quantity}</dd>
            <dt>
              <span id="creationDate">Creation Date</span>
            </dt>
            <dd>
              <TextFormat value={commerceItemEntity.creationDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="updateDate">Update Date</span>
            </dt>
            <dd>
              <TextFormat value={commerceItemEntity.updateDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>Commerce Order</dt>
            <dd>{commerceItemEntity.commerceOrderId ? commerceItemEntity.commerceOrderId : ''}</dd>
            <dt>Price</dt>
            <dd>{commerceItemEntity.priceId ? commerceItemEntity.priceId : ''}</dd>
            <dt>Ship Info</dt>
            <dd>{commerceItemEntity.shipInfoId ? commerceItemEntity.shipInfoId : ''}</dd>
            <dt>Pay Info</dt>
            <dd>{commerceItemEntity.payInfoId ? commerceItemEntity.payInfoId : ''}</dd>
            <dt>Shipcontainer</dt>
            <dd>
              {commerceItemEntity.shipcontainers
                ? commerceItemEntity.shipcontainers.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.shipstatus}</a>
                      {i === commerceItemEntity.shipcontainers.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>Payment</dt>
            <dd>
              {commerceItemEntity.payments
                ? commerceItemEntity.payments.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.paystatus}</a>
                      {i === commerceItemEntity.payments.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
          </dl>
          <Button tag={Link} to="/entity/commerce-item" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/commerce-item/${commerceItemEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ commerceItem }: IRootState) => ({
  commerceItemEntity: commerceItem.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceItemDetail);
