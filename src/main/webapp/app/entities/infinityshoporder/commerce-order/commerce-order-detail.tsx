import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './commerce-order.reducer';
import { ICommerceOrder } from 'app/shared/model/infinityshoporder/commerce-order.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceOrderDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceOrderDetail extends React.Component<ICommerceOrderDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { commerceOrderEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            CommerceOrder [<b>{commerceOrderEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="status">Status</span>
            </dt>
            <dd>{commerceOrderEntity.status}</dd>
            <dt>
              <span id="custid">Custid</span>
            </dt>
            <dd>{commerceOrderEntity.custid}</dd>
            <dt>
              <span id="creationDate">Creation Date</span>
            </dt>
            <dd>
              <TextFormat value={commerceOrderEntity.creationDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="placedDate">Placed Date</span>
            </dt>
            <dd>
              <TextFormat value={commerceOrderEntity.placedDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="updateDate">Update Date</span>
            </dt>
            <dd>
              <TextFormat value={commerceOrderEntity.updateDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
          </dl>
          <Button tag={Link} to="/entity/commerce-order" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/commerce-order/${commerceOrderEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ commerceOrder }: IRootState) => ({
  commerceOrderEntity: commerceOrder.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceOrderDetail);
