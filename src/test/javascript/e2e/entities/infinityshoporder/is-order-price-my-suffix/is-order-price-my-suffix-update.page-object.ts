import { element, by, ElementFinder } from 'protractor';

export default class ISOrderPriceUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderISOrderPrice.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nameInput: ElementFinder = element(by.css('input#is-order-price-my-suffix-name'));
  priceInput: ElementFinder = element(by.css('input#is-order-price-my-suffix-price'));
  iSOrderSelect: ElementFinder = element(by.css('select#is-order-price-my-suffix-iSOrder'));

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
