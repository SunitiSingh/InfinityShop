import { element, by, ElementFinder } from 'protractor';

export default class CommerceShipPriceNgUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderCommerceShipPriceNg.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  priceInput: ElementFinder = element(by.css('input#commerce-ship-price-ng-price'));
  commerceShipContainerPriceSelect: ElementFinder = element(by.css('select#commerce-ship-price-ng-commerceShipContainerPrice'));

  getPageTitle() {
    return this.pageTitle;
  }

  setPriceInput(price) {
    this.priceInput.sendKeys(price);
  }

  getPriceInput() {
    return this.priceInput.getAttribute('value');
  }

  commerceShipContainerPriceSelectLastOption() {
    this.commerceShipContainerPriceSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  commerceShipContainerPriceSelectOption(option) {
    this.commerceShipContainerPriceSelect.sendKeys(option);
  }

  getCommerceShipContainerPriceSelect() {
    return this.commerceShipContainerPriceSelect;
  }

  getCommerceShipContainerPriceSelectedOption() {
    return this.commerceShipContainerPriceSelect.element(by.css('option:checked')).getText();
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
