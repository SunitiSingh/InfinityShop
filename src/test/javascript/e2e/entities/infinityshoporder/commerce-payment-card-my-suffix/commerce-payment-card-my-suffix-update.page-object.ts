import { element, by, ElementFinder } from 'protractor';

export default class CommercePaymentCardUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderCommercePaymentCard.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  cardTypeInput: ElementFinder = element(by.css('input#commerce-payment-card-my-suffix-cardType'));
  cardNumberInput: ElementFinder = element(by.css('input#commerce-payment-card-my-suffix-cardNumber'));
  expMonthInput: ElementFinder = element(by.css('input#commerce-payment-card-my-suffix-expMonth'));
  expYearInput: ElementFinder = element(by.css('input#commerce-payment-card-my-suffix-expYear'));
  createDateInput: ElementFinder = element(by.css('input#commerce-payment-card-my-suffix-createDate'));
  updateDateInput: ElementFinder = element(by.css('input#commerce-payment-card-my-suffix-updateDate'));

  getPageTitle() {
    return this.pageTitle;
  }

  setCardTypeInput(cardType) {
    this.cardTypeInput.sendKeys(cardType);
  }

  getCardTypeInput() {
    return this.cardTypeInput.getAttribute('value');
  }

  setCardNumberInput(cardNumber) {
    this.cardNumberInput.sendKeys(cardNumber);
  }

  getCardNumberInput() {
    return this.cardNumberInput.getAttribute('value');
  }

  setExpMonthInput(expMonth) {
    this.expMonthInput.sendKeys(expMonth);
  }

  getExpMonthInput() {
    return this.expMonthInput.getAttribute('value');
  }

  setExpYearInput(expYear) {
    this.expYearInput.sendKeys(expYear);
  }

  getExpYearInput() {
    return this.expYearInput.getAttribute('value');
  }

  setCreateDateInput(createDate) {
    this.createDateInput.sendKeys(createDate);
  }

  getCreateDateInput() {
    return this.createDateInput.getAttribute('value');
  }

  setUpdateDateInput(updateDate) {
    this.updateDateInput.sendKeys(updateDate);
  }

  getUpdateDateInput() {
    return this.updateDateInput.getAttribute('value');
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
