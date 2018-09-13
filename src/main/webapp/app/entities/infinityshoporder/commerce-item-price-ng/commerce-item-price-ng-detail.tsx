import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './commerce-item-price-ng.reducer';
import { ICommerceItemPriceNg } from 'app/shared/model/infinityshoporder/commerce-item-price-ng.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceItemPriceNgDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceItemPriceNgDetail extends React.Component<ICommerceItemPriceNgDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { commerceItemPriceNgEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            CommerceItemPriceNg [<b>{commerceItemPriceNgEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="price">Price</span>
            </dt>
            <dd>{commerceItemPriceNgEntity.price}</dd>
            <dt>
              <span id="ngid">Ngid</span>
            </dt>
            <dd>{commerceItemPriceNgEntity.ngid}</dd>
            <dt>Commerce Item Price</dt>
            <dd>{commerceItemPriceNgEntity.commerceItemPriceId ? commerceItemPriceNgEntity.commerceItemPriceId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/commerce-item-price-ng" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/commerce-item-price-ng/${commerceItemPriceNgEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ commerceItemPriceNg }: IRootState) => ({
  commerceItemPriceNgEntity: commerceItemPriceNg.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceItemPriceNgDetail);
