import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICommerceShipContainerPrice } from 'app/shared/model/infinityshoporder/commerce-ship-container-price.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './commerce-ship-container-price.reducer';

export interface ICommerceShipContainerPriceDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class CommerceShipContainerPriceDeleteDialog extends React.Component<ICommerceShipContainerPriceDeleteDialogProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.commerceShipContainerPriceEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { commerceShipContainerPriceEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>Confirm delete operation</ModalHeader>
        <ModalBody>Are you sure you want to delete this CommerceShipContainerPrice?</ModalBody>
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

const mapStateToProps = ({ commerceShipContainerPrice }: IRootState) => ({
  commerceShipContainerPriceEntity: commerceShipContainerPrice.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommerceShipContainerPriceDeleteDialog);
