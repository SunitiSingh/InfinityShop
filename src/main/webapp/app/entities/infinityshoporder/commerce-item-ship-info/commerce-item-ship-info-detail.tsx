import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './commerce-item-ship-info.reducer';
import { ICommerceItemShipInfo } from 'app/shared/model/infinityshoporder/commerce-item-ship-info.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceItemShipInfoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceItemShipInfoDetail extends React.Component<ICommerceItemShipInfoDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { commerceItemShipInfoEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            CommerceItemShipInfo [<b>{commerceItemShipInfoEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="status">Status</span>
            </dt>
            <dd>{commerceItemShipInfoEntity.status}</dd>
            <dt>
              <span id="quantity">Quantity</span>
            </dt>
            <dd>{commerceItemShipInfoEntity.quantity}</dd>
            <dt>Ship Container</dt>
            <dd>{commerceItemShipInfoEntity.shipContainerId ? commerceItemShipInfoEntity.shipContainerId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/commerce-item-ship-info" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/commerce-item-ship-info/${commerceItemShipInfoEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ commerceItemShipInfo }: IRootState) => ({
  commerceItemShipInfoEntity: commerceItemShipInfo.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceItemShipInfoDetail);
