import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './commerce-item-price.reducer';
import { ICommerceItemPrice } from 'app/shared/model/infinityshoporder/commerce-item-price.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceItemPriceDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceItemPriceDetail extends React.Component<ICommerceItemPriceDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { commerceItemPriceEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            CommerceItemPrice [<b>{commerceItemPriceEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="price">Price</span>
            </dt>
            <dd>{commerceItemPriceEntity.price}</dd>
          </dl>
          <Button tag={Link} to="/entity/commerce-item-price" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/commerce-item-price/${commerceItemPriceEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ commerceItemPrice }: IRootState) => ({
  commerceItemPriceEntity: commerceItemPrice.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceItemPriceDetail);
