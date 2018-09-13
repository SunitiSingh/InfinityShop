import { element, by, ElementFinder } from 'protractor';

export default class CommerceEPayUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderCommerceEPay.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  ePayTypeInput: ElementFinder = element(by.css('input#commerce-e-pay-ePayType'));
  ePayTokenInput: ElementFinder = element(by.css('input#commerce-e-pay-ePayToken'));
  createDateInput: ElementFinder = element(by.css('input#commerce-e-pay-createDate'));
  updateDateInput: ElementFinder = element(by.css('input#commerce-e-pay-updateDate'));

  getPageTitle() {
    return this.pageTitle;
  }

  setEPayTypeInput(ePayType) {
    this.ePayTypeInput.sendKeys(ePayType);
  }

  getEPayTypeInput() {
    return this.ePayTypeInput.getAttribute('value');
  }

  setEPayTokenInput(ePayToken) {
    this.ePayTokenInput.sendKeys(ePayToken);
  }

  getEPayTokenInput() {
    return this.ePayTokenInput.getAttribute('value');
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
