import { element, by, ElementFinder } from 'protractor';

export default class CommerceItemUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderCommerceItem.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  skuidInput: ElementFinder = element(by.css('input#commerce-item-skuid'));
  quantityInput: ElementFinder = element(by.css('input#commerce-item-quantity'));
  creationDateInput: ElementFinder = element(by.css('input#commerce-item-creationDate'));
  updateDateInput: ElementFinder = element(by.css('input#commerce-item-updateDate'));
  commerceOrderSelect: ElementFinder = element(by.css('select#commerce-item-commerceOrder'));
  priceSelect: ElementFinder = element(by.css('select#commerce-item-price'));
  shipInfoSelect: ElementFinder = element(by.css('select#commerce-item-shipInfo'));
  payInfoSelect: ElementFinder = element(by.css('select#commerce-item-payInfo'));
  shipcontainerSelect: ElementFinder = element(by.css('select#commerce-item-shipcontainer'));
  paymentSelect: ElementFinder = element(by.css('select#commerce-item-payment'));

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

  shipInfoSelectLastOption() {
    this.shipInfoSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  shipInfoSelectOption(option) {
    this.shipInfoSelect.sendKeys(option);
  }

  getShipInfoSelect() {
    return this.shipInfoSelect;
  }

  getShipInfoSelectedOption() {
    return this.shipInfoSelect.element(by.css('option:checked')).getText();
  }

  payInfoSelectLastOption() {
    this.payInfoSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  payInfoSelectOption(option) {
    this.payInfoSelect.sendKeys(option);
  }

  getPayInfoSelect() {
    return this.payInfoSelect;
  }

  getPayInfoSelectedOption() {
    return this.payInfoSelect.element(by.css('option:checked')).getText();
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
