import { element, by, ElementFinder } from 'protractor';

export default class CommerceShippingContainerUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderCommerceShippingContainer.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  shipstatusSelect: ElementFinder = element(by.css('select#commerce-shipping-container-my-suffix-shipstatus'));
  carrierInput: ElementFinder = element(by.css('input#commerce-shipping-container-my-suffix-carrier'));
  creationDateInput: ElementFinder = element(by.css('input#commerce-shipping-container-my-suffix-creationDate'));
  updateDateInput: ElementFinder = element(by.css('input#commerce-shipping-container-my-suffix-updateDate'));
  commerceOrderSelect: ElementFinder = element(by.css('select#commerce-shipping-container-my-suffix-commerceOrder'));
  priceSelect: ElementFinder = element(by.css('select#commerce-shipping-container-my-suffix-price'));

  getPageTitle() {
    return this.pageTitle;
  }

  setShipstatusSelect(shipstatus) {
    this.shipstatusSelect.sendKeys(shipstatus);
  }

  getShipstatusSelect() {
    return this.shipstatusSelect.element(by.css('option:checked')).getText();
  }

  shipstatusSelectLastOption() {
    this.shipstatusSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setCarrierInput(carrier) {
    this.carrierInput.sendKeys(carrier);
  }

  getCarrierInput() {
    return this.carrierInput.getAttribute('value');
  }

  setCreationDateInput(creationDate) {
    this.creationDateInput.sendKeys(creationDate);
  }

  getCreationDateInput() {
    return this.creationDateInput.getAttribute('value');
  }

  setUpdateDateInput(updateDate) {
    this.updateDateInput.sendKeys(updateDate);
  }

  getUpdateDateInput() {
    return this.updateDateInput.getAttribute('value');
  }

  commerceOrderSelectLastOption() {
    this.commerceOrderSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  commerceOrderSelectOption(option) {
    this.commerceOrderSelect.sendKeys(option);
  }

  getCommerceOrderSelect() {
    return this.commerceOrderSelect;
  }

  getCommerceOrderSelectedOption() {
    return this.commerceOrderSelect.element(by.css('option:checked')).getText();
  }

  priceSelectLastOption() {
    this.priceSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  priceSelectOption(option) {
    this.priceSelect.sendKeys(option);
  }

  getPriceSelect() {
    return this.priceSelect;
  }

  getPriceSelectedOption() {
    return this.priceSelect.element(by.css('option:checked')).getText();
  }

  save() {
    return this.saveButton.click();
  }

  cancel() {
    this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }
}
