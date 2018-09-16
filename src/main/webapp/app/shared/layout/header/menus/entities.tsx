import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';

export const EntitiesMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="th-list" name="Entities" id="entity-menu">
    <DropdownItem tag={Link} to="/entity/commerce-order">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Order
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-order-price">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Order Price
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-order-price-ng">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Order Price Ng
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-item">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Item
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-item-price">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Item Price
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-item-price-ng">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Item Price Ng
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-shipping-container">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Shipping Container
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-ship-container-price">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Ship Container Price
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-ship-price-ng">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Ship Price Ng
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-order-payment">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Order Payment
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-payment-card">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Payment Card
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-e-pay">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce E Pay
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-billing-address">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Billing Address
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-item-ship-info">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Item Ship Info
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/commerce-item-pay-info">
      <FontAwesomeIcon icon="asterisk" />&nbsp;Commerce Item Pay Info
    </DropdownItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
