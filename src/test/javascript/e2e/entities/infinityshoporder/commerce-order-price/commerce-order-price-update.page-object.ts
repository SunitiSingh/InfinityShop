import { element, by, ElementFinder } from 'protractor';

export default class CommerceOrderPriceUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderCommerceOrderPrice.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nameInput: ElementFinder = element(by.css('input#commerce-order-price-name'));
  priceInput: ElementFinder = element(by.css('input#commerce-order-price-price'));
  commerceOrderSelect: ElementFinder = element(by.css('select#commerce-order-price-commerceOrder'));

  getPageTitle() {
    return this.pageTitle;
  }

  setNameInput(name) {
    this.nameInput.sendKeys(name);
  }

  getNameInput() {
    return this.nameInput.getAttribute('value');
  }

  setPriceInput(price) {
    this.priceInput.sendKeys(price);
  }

  getPriceInput() {
    return this.priceInput.getAttribute('value');
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
