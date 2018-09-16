import { element, by, ElementFinder } from 'protractor';

export default class CommerceItemPayInfoUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderCommerceItemPayInfo.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  statusSelect: ElementFinder = element(by.css('select#commerce-item-pay-info-status'));
  quantityInput: ElementFinder = element(by.css('input#commerce-item-pay-info-quantity'));
  orderPaymentSelect: ElementFinder = element(by.css('select#commerce-item-pay-info-orderPayment'));

  getPageTitle() {
    return this.pageTitle;
  }

  setStatusSelect(status) {
    this.statusSelect.sendKeys(status);
  }

  getStatusSelect() {
    return this.statusSelect.element(by.css('option:checked')).getText();
  }

  statusSelectLastOption() {
    this.statusSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setQuantityInput(quantity) {
    this.quantityInput.sendKeys(quantity);
  }

  getQuantityInput() {
    return this.quantityInput.getAttribute('value');
  }

  orderPaymentSelectLastOption() {
    this.orderPaymentSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  orderPaymentSelectOption(option) {
    this.orderPaymentSelect.sendKeys(option);
  }

  getOrderPaymentSelect() {
    return this.orderPaymentSelect;
  }

  getOrderPaymentSelectedOption() {
    return this.orderPaymentSelect.element(by.css('option:checked')).getText();
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
