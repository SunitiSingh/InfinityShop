import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './commerce-payment-card.reducer';
import { ICommercePaymentCard } from 'app/shared/model/infinityshoporder/commerce-payment-card.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommercePaymentCardDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommercePaymentCardDetail extends React.Component<ICommercePaymentCardDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { commercePaymentCardEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            CommercePaymentCard [<b>{commercePaymentCardEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="cardType">Card Type</span>
            </dt>
            <dd>{commercePaymentCardEntity.cardType}</dd>
            <dt>
              <span id="cardNumber">Card Number</span>
            </dt>
            <dd>{commercePaymentCardEntity.cardNumber}</dd>
            <dt>
              <span id="expMonth">Exp Month</span>
            </dt>
            <dd>{commercePaymentCardEntity.expMonth}</dd>
            <dt>
              <span id="expYear">Exp Year</span>
            </dt>
            <dd>{commercePaymentCardEntity.expYear}</dd>
            <dt>
              <span id="createDate">Create Date</span>
            </dt>
            <dd>
              <TextFormat value={commercePaymentCardEntity.createDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="updateDate">Update Date</span>
            </dt>
            <dd>
              <TextFormat value={commercePaymentCardEntity.updateDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
          </dl>
          <Button tag={Link} to="/entity/commerce-payment-card" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/commerce-payment-card/${commercePaymentCardEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ commercePaymentCard }: IRootState) => ({
  commercePaymentCardEntity: commercePaymentCard.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommercePaymentCardDetail);
