import { element, by, ElementFinder } from 'protractor';

export default class CommerceItemPriceNgUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderCommerceItemPriceNg.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  priceInput: ElementFinder = element(by.css('input#commerce-item-price-ng-price'));
  ngidInput: ElementFinder = element(by.css('input#commerce-item-price-ng-ngid'));
  commerceItemPriceSelect: ElementFinder = element(by.css('select#commerce-item-price-ng-commerceItemPrice'));

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

  commerceItemPriceSelectLastOption() {
    this.commerceItemPriceSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  commerceItemPriceSelectOption(option) {
    this.commerceItemPriceSelect.sendKeys(option);
  }

  getCommerceItemPriceSelect() {
    return this.commerceItemPriceSelect;
  }

  getCommerceItemPriceSelectedOption() {
    return this.commerceItemPriceSelect.element(by.css('option:checked')).getText();
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
