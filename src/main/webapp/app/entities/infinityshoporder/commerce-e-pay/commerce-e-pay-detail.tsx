import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './commerce-e-pay.reducer';
import { ICommerceEPay } from 'app/shared/model/infinityshoporder/commerce-e-pay.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICommerceEPayDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceEPayDetail extends React.Component<ICommerceEPayDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { commerceEPayEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            CommerceEPay [<b>{commerceEPayEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="ePayType">E Pay Type</span>
            </dt>
            <dd>{commerceEPayEntity.ePayType}</dd>
            <dt>
              <span id="ePayToken">E Pay Token</span>
            </dt>
            <dd>{commerceEPayEntity.ePayToken}</dd>
            <dt>
              <span id="createDate">Create Date</span>
            </dt>
            <dd>
              <TextFormat value={commerceEPayEntity.createDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="updateDate">Update Date</span>
            </dt>
            <dd>
              <TextFormat value={commerceEPayEntity.updateDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
          </dl>
          <Button tag={Link} to="/entity/commerce-e-pay" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/commerce-e-pay/${commerceEPayEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ commerceEPay }: IRootState) => ({
  commerceEPayEntity: commerceEPay.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceEPayDetail);
