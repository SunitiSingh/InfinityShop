import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './commerce-order-price-ng.reducer';
import { ICommerceOrderPriceNg } from 'app/shared/model/infinityshoporder/commerce-order-price-ng.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceOrderPriceNgDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceOrderPriceNgDetail extends React.Component<ICommerceOrderPriceNgDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { commerceOrderPriceNgEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            CommerceOrderPriceNg [<b>{commerceOrderPriceNgEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="price">Price</span>
            </dt>
            <dd>{commerceOrderPriceNgEntity.price}</dd>
            <dt>
              <span id="ngid">Ngid</span>
            </dt>
            <dd>{commerceOrderPriceNgEntity.ngid}</dd>
            <dt>Commerce Order Price</dt>
            <dd>{commerceOrderPriceNgEntity.commerceOrderPriceId ? commerceOrderPriceNgEntity.commerceOrderPriceId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/commerce-order-price-ng" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/commerce-order-price-ng/${commerceOrderPriceNgEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ commerceOrderPriceNg }: IRootState) => ({
  commerceOrderPriceNgEntity: commerceOrderPriceNg.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceOrderPriceNgDetail);
