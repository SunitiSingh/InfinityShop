import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './commerce-order-price.reducer';
import { ICommerceOrderPrice } from 'app/shared/model/infinityshoporder/commerce-order-price.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceOrderPriceDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceOrderPriceDetail extends React.Component<ICommerceOrderPriceDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { commerceOrderPriceEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            CommerceOrderPrice [<b>{commerceOrderPriceEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="name">Name</span>
            </dt>
            <dd>{commerceOrderPriceEntity.name}</dd>
            <dt>
              <span id="price">Price</span>
            </dt>
            <dd>{commerceOrderPriceEntity.price}</dd>
            <dt>Commerce Order</dt>
            <dd>{commerceOrderPriceEntity.commerceOrderId ? commerceOrderPriceEntity.commerceOrderId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/commerce-order-price" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/commerce-order-price/${commerceOrderPriceEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ commerceOrderPrice }: IRootState) => ({
  commerceOrderPriceEntity: commerceOrderPrice.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceOrderPriceDetail);
