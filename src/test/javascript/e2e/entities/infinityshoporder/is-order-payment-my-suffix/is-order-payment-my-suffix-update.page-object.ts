import { element, by, ElementFinder } from 'protractor';

export default class ISOrderPaymentUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderISOrderPayment.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  paystatusSelect: ElementFinder = element(by.css('select#is-order-payment-my-suffix-paystatus'));
  paymentAmountInput: ElementFinder = element(by.css('input#is-order-payment-my-suffix-paymentAmount'));
  paymentTypeSelect: ElementFinder = element(by.css('select#is-order-payment-my-suffix-paymentType'));
  firstNameInput: ElementFinder = element(by.css('input#is-order-payment-my-suffix-firstName'));
  lastNameInput: ElementFinder = element(by.css('input#is-order-payment-my-suffix-lastName'));
  billingPhoneInput: ElementFinder = element(by.css('input#is-order-payment-my-suffix-billingPhone'));
  iSOrderSelect: ElementFinder = element(by.css('select#is-order-payment-my-suffix-iSOrder'));
  cardSelect: ElementFinder = element(by.css('select#is-order-payment-my-suffix-card'));
  epaySelect: ElementFinder = element(by.css('select#is-order-payment-my-suffix-epay'));
  billingAddressSelect: ElementFinder = element(by.css('select#is-order-payment-my-suffix-billingAddress'));

  getPageTitle() {
    return this.pageTitle;
  }

  setPaystatusSelect(paystatus) {
    this.paystatusSelect.sendKeys(paystatus);
  }

  getPaystatusSelect() {
    return this.paystatusSelect.element(by.css('option:checked')).getText();
  }

  paystatusSelectLastOption() {
    this.paystatusSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setPaymentAmountInput(paymentAmount) {
    this.paymentAmountInput.sendKeys(paymentAmount);
  }

  getPaymentAmountInput() {
    return this.paymentAmountInput.getAttribute('value');
  }

  setPaymentTypeSelect(paymentType) {
    this.paymentTypeSelect.sendKeys(paymentType);
  }

  getPaymentTypeSelect() {
    return this.paymentTypeSelect.element(by.css('option:checked')).getText();
  }

  paymentTypeSelectLastOption() {
    this.paymentTypeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setFirstNameInput(firstName) {
    this.firstNameInput.sendKeys(firstName);
  }

  getFirstNameInput() {
    return this.firstNameInput.getAttribute('value');
  }

  setLastNameInput(lastName) {
    this.lastNameInput.sendKeys(lastName);
  }

  getLastNameInput() {
    return this.lastNameInput.getAttribute('value');
  }

  setBillingPhoneInput(billingPhone) {
    this.billingPhoneInput.sendKeys(billingPhone);
  }

  getBillingPhoneInput() {
    return this.billingPhoneInput.getAttribute('value');
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

  cardSelectLastOption() {
    this.cardSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  cardSelectOption(option) {
    this.cardSelect.sendKeys(option);
  }

  getCardSelect() {
    return this.cardSelect;
  }

  getCardSelectedOption() {
    return this.cardSelect.element(by.css('option:checked')).getText();
  }

  epaySelectLastOption() {
    this.epaySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  epaySelectOption(option) {
    this.epaySelect.sendKeys(option);
  }

  getEpaySelect() {
    return this.epaySelect;
  }

  getEpaySelectedOption() {
    return this.epaySelect.element(by.css('option:checked')).getText();
  }

  billingAddressSelectLastOption() {
    this.billingAddressSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  billingAddressSelectOption(option) {
    this.billingAddressSelect.sendKeys(option);
  }

  getBillingAddressSelect() {
    return this.billingAddressSelect;
  }

  getBillingAddressSelectedOption() {
    return this.billingAddressSelect.element(by.css('option:checked')).getText();
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
