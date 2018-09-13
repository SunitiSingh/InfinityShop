import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICommerceOrderPriceNg } from 'app/shared/model/infinityshoporder/commerce-order-price-ng.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './commerce-order-price-ng.reducer';

export interface ICommerceOrderPriceNgDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceOrderPriceNgDeleteDialog extends React.Component<ICommerceOrderPriceNgDeleteDialogProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.commerceOrderPriceNgEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { commerceOrderPriceNgEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>Confirm delete operation</ModalHeader>
        <ModalBody>Are you sure you want to delete this CommerceOrderPriceNg?</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />&nbsp; Cancel
          </Button>
          <Button color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />&nbsp; Delete
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ commerceOrderPriceNg }: IRootState) => ({
  commerceOrderPriceNgEntity: commerceOrderPriceNg.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceOrderPriceNgDeleteDialog);
