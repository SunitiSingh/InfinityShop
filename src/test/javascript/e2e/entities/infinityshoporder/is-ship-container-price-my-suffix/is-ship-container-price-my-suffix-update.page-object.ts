import { element, by, ElementFinder } from 'protractor';

export default class ISShipContainerPriceUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderISShipContainerPrice.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  priceInput: ElementFinder = element(by.css('input#is-ship-container-price-my-suffix-price'));

  getPageTitle() {
    return this.pageTitle;
  }

  setPriceInput(price) {
    this.priceInput.sendKeys(price);
  }

  getPriceInput() {
    return this.priceInput.getAttribute('value');
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
