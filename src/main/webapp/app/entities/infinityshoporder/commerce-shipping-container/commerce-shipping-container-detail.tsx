import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './commerce-shipping-container.reducer';
import { ICommerceShippingContainer } from 'app/shared/model/infinityshoporder/commerce-shipping-container.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceShippingContainerDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceShippingContainerDetail extends React.Component<ICommerceShippingContainerDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { commerceShippingContainerEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            CommerceShippingContainer [<b>{commerceShippingContainerEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="shipstatus">Shipstatus</span>
            </dt>
            <dd>{commerceShippingContainerEntity.shipstatus}</dd>
            <dt>
              <span id="carrier">Carrier</span>
            </dt>
            <dd>{commerceShippingContainerEntity.carrier}</dd>
            <dt>
              <span id="creationDate">Creation Date</span>
            </dt>
            <dd>
              <TextFormat value={commerceShippingContainerEntity.creationDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="updateDate">Update Date</span>
            </dt>
            <dd>
              <TextFormat value={commerceShippingContainerEntity.updateDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>Commerce Order</dt>
            <dd>{commerceShippingContainerEntity.commerceOrderId ? commerceShippingContainerEntity.commerceOrderId : ''}</dd>
            <dt>Price</dt>
            <dd>{commerceShippingContainerEntity.priceId ? commerceShippingContainerEntity.priceId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/commerce-shipping-container" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/commerce-shipping-container/${commerceShippingContainerEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ commerceShippingContainer }: IRootState) => ({
  commerceShippingContainerEntity: commerceShippingContainer.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceShippingContainerDetail);
