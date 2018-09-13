import { element, by, ElementFinder } from 'protractor';

export default class CommerceBillingAddressUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderCommerceBillingAddress.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  address1Input: ElementFinder = element(by.css('input#commerce-billing-address-my-suffix-address1'));
  address2Input: ElementFinder = element(by.css('input#commerce-billing-address-my-suffix-address2'));
  cityInput: ElementFinder = element(by.css('input#commerce-billing-address-my-suffix-city'));
  postalcodeInput: ElementFinder = element(by.css('input#commerce-billing-address-my-suffix-postalcode'));
  createDateInput: ElementFinder = element(by.css('input#commerce-billing-address-my-suffix-createDate'));
  updateDateInput: ElementFinder = element(by.css('input#commerce-billing-address-my-suffix-updateDate'));

  getPageTitle() {
    return this.pageTitle;
  }

  setAddress1Input(address1) {
    this.address1Input.sendKeys(address1);
  }

  getAddress1Input() {
    return this.address1Input.getAttribute('value');
  }

  setAddress2Input(address2) {
    this.address2Input.sendKeys(address2);
  }

  getAddress2Input() {
    return this.address2Input.getAttribute('value');
  }

  setCityInput(city) {
    this.cityInput.sendKeys(city);
  }

  getCityInput() {
    return this.cityInput.getAttribute('value');
  }

  setPostalcodeInput(postalcode) {
    this.postalcodeInput.sendKeys(postalcode);
  }

  getPostalcodeInput() {
    return this.postalcodeInput.getAttribute('value');
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
