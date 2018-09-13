import { element, by, ElementFinder } from 'protractor';

export default class ISOrderPriceNegotiationUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderISOrderPriceNegotiation.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  priceInput: ElementFinder = element(by.css('input#is-order-price-negotiation-my-suffix-price'));
  negotiationidInput: ElementFinder = element(by.css('input#is-order-price-negotiation-my-suffix-negotiationid'));
  iSOrderPriceSelect: ElementFinder = element(by.css('select#is-order-price-negotiation-my-suffix-iSOrderPrice'));

  getPageTitle() {
    return this.pageTitle;
  }

  setPriceInput(price) {
    this.priceInput.sendKeys(price);
  }

  getPriceInput() {
    return this.priceInput.getAttribute('value');
  }

  setNegotiationidInput(negotiationid) {
    this.negotiationidInput.sendKeys(negotiationid);
  }

  getNegotiationidInput() {
    return this.negotiationidInput.getAttribute('value');
  }

  iSOrderPriceSelectLastOption() {
    this.iSOrderPriceSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  iSOrderPriceSelectOption(option) {
    this.iSOrderPriceSelect.sendKeys(option);
  }

  getISOrderPriceSelect() {
    return this.iSOrderPriceSelect;
  }

  getISOrderPriceSelectedOption() {
    return this.iSOrderPriceSelect.element(by.css('option:checked')).getText();
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
