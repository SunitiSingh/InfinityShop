import { element, by, ElementFinder } from 'protractor';

export default class CommerceOrderPriceNgUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderCommerceOrderPriceNg.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  priceInput: ElementFinder = element(by.css('input#commerce-order-price-ng-price'));
  ngidInput: ElementFinder = element(by.css('input#commerce-order-price-ng-ngid'));
  commerceOrderPriceSelect: ElementFinder = element(by.css('select#commerce-order-price-ng-commerceOrderPrice'));

  getPageTitle() {
    return this.pageTitle;
  }

  setPriceInput(price) {
    this.priceInput.sendKeys(price);
  }

  getPriceInput() {
    return this.priceInput.getAttribute('value');
  }

  setNgidInput(ngid) {
    this.ngidInput.sendKeys(ngid);
  }

  getNgidInput() {
    return this.ngidInput.getAttribute('value');
  }

  commerceOrderPriceSelectLastOption() {
    this.commerceOrderPriceSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  commerceOrderPriceSelectOption(option) {
    this.commerceOrderPriceSelect.sendKeys(option);
  }

  getCommerceOrderPriceSelect() {
    return this.commerceOrderPriceSelect;
  }

  getCommerceOrderPriceSelectedOption() {
    return this.commerceOrderPriceSelect.element(by.css('option:checked')).getText();
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
