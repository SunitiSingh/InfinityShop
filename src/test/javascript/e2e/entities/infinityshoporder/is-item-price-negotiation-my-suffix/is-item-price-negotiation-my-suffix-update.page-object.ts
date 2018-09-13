import { element, by, ElementFinder } from 'protractor';

export default class ISItemPriceNegotiationUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderISItemPriceNegotiation.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  priceInput: ElementFinder = element(by.css('input#is-item-price-negotiation-my-suffix-price'));
  negotiationidInput: ElementFinder = element(by.css('input#is-item-price-negotiation-my-suffix-negotiationid'));
  iSItemPriceSelect: ElementFinder = element(by.css('select#is-item-price-negotiation-my-suffix-iSItemPrice'));

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

  iSItemPriceSelectLastOption() {
    this.iSItemPriceSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  iSItemPriceSelectOption(option) {
    this.iSItemPriceSelect.sendKeys(option);
  }

  getISItemPriceSelect() {
    return this.iSItemPriceSelect;
  }

  getISItemPriceSelectedOption() {
    return this.iSItemPriceSelect.element(by.css('option:checked')).getText();
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
