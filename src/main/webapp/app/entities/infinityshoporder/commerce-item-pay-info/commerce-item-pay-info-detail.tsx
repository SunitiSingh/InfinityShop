import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './commerce-item-pay-info.reducer';
import { ICommerceItemPayInfo } from 'app/shared/model/infinityshoporder/commerce-item-pay-info.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceItemPayInfoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceItemPayInfoDetail extends React.Component<ICommerceItemPayInfoDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { commerceItemPayInfoEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            CommerceItemPayInfo [<b>{commerceItemPayInfoEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="status">Status</span>
            </dt>
            <dd>{commerceItemPayInfoEntity.status}</dd>
            <dt>
              <span id="quantity">Quantity</span>
            </dt>
            <dd>{commerceItemPayInfoEntity.quantity}</dd>
            <dt>Order Payment</dt>
            <dd>{commerceItemPayInfoEntity.orderPaymentId ? commerceItemPayInfoEntity.orderPaymentId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/commerce-item-pay-info" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/commerce-item-pay-info/${commerceItemPayInfoEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ commerceItemPayInfo }: IRootState) => ({
  commerceItemPayInfoEntity: commerceItemPayInfo.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceItemPayInfoDetail);
