import { element, by, ElementFinder } from 'protractor';

export default class ISShippingContainerUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderISShippingContainer.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  shipstatusSelect: ElementFinder = element(by.css('select#is-shipping-container-my-suffix-shipstatus'));
  carrierInput: ElementFinder = element(by.css('input#is-shipping-container-my-suffix-carrier'));
  creationDateInput: ElementFinder = element(by.css('input#is-shipping-container-my-suffix-creationDate'));
  updateDateInput: ElementFinder = element(by.css('input#is-shipping-container-my-suffix-updateDate'));
  iSOrderSelect: ElementFinder = element(by.css('select#is-shipping-container-my-suffix-iSOrder'));
  priceSelect: ElementFinder = element(by.css('select#is-shipping-container-my-suffix-price'));

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

  iSOrderSelectLastOption() {
    this.iSOrderSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  iSOrderSelectOption(option) {
    this.iSOrderSelect.sendKeys(option);
  }

  getISOrderSelect() {
    return this.iSOrderSelect;
  }

  getISOrderSelectedOption() {
    return this.iSOrderSelect.element(by.css('option:checked')).getText();
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
