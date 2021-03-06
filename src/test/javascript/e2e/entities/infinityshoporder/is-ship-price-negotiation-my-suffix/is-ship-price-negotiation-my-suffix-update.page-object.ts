import { element, by, ElementFinder } from 'protractor';

export default class ISShipPriceNegotiationUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderISShipPriceNegotiation.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  priceInput: ElementFinder = element(by.css('input#is-ship-price-negotiation-my-suffix-price'));
  iSShipContainerPriceSelect: ElementFinder = element(by.css('select#is-ship-price-negotiation-my-suffix-iSShipContainerPrice'));

  getPageTitle() {
    return this.pageTitle;
  }

  setPriceInput(price) {
    this.priceInput.sendKeys(price);
  }

  getPriceInput() {
    return this.priceInput.getAttribute('value');
  }

  iSShipContainerPriceSelectLastOption() {
    this.iSShipContainerPriceSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  iSShipContainerPriceSelectOption(option) {
    this.iSShipContainerPriceSelect.sendKeys(option);
  }

  getISShipContainerPriceSelect() {
    return this.iSShipContainerPriceSelect;
  }

  getISShipContainerPriceSelectedOption() {
    return this.iSShipContainerPriceSelect.element(by.css('option:checked')).getText();
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
