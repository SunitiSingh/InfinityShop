import { element, by, ElementFinder } from 'protractor';

export default class ISItemUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderISItem.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  skuidInput: ElementFinder = element(by.css('input#is-item-my-suffix-skuid'));
  quantityInput: ElementFinder = element(by.css('input#is-item-my-suffix-quantity'));
  creationDateInput: ElementFinder = element(by.css('input#is-item-my-suffix-creationDate'));
  updateDateInput: ElementFinder = element(by.css('input#is-item-my-suffix-updateDate'));
  iSOrderSelect: ElementFinder = element(by.css('select#is-item-my-suffix-iSOrder'));
  priceSelect: ElementFinder = element(by.css('select#is-item-my-suffix-price'));
  shipcontainerSelect: ElementFinder = element(by.css('select#is-item-my-suffix-shipcontainer'));
  paymentSelect: ElementFinder = element(by.css('select#is-item-my-suffix-payment'));

  getPageTitle() {
    return this.pageTitle;
  }

  setSkuidInput(skuid) {
    this.skuidInput.sendKeys(skuid);
  }

  getSkuidInput() {
    return this.skuidInput.getAttribute('value');
  }

  setQuantityInput(quantity) {
    this.quantityInput.sendKeys(quantity);
  }

  getQuantityInput() {
    return this.quantityInput.getAttribute('value');
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

  shipcontainerSelectLastOption() {
    this.shipcontainerSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  shipcontainerSelectOption(option) {
    this.shipcontainerSelect.sendKeys(option);
  }

  getShipcontainerSelect() {
    return this.shipcontainerSelect;
  }

  getShipcontainerSelectedOption() {
    return this.shipcontainerSelect.element(by.css('option:checked')).getText();
  }

  paymentSelectLastOption() {
    this.paymentSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  paymentSelectOption(option) {
    this.paymentSelect.sendKeys(option);
  }

  getPaymentSelect() {
    return this.paymentSelect;
  }

  getPaymentSelectedOption() {
    return this.paymentSelect.element(by.css('option:checked')).getText();
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
