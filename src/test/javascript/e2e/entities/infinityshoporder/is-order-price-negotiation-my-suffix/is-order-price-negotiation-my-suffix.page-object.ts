import { element, by, ElementFinder } from 'protractor';

export default class ISOrderPriceNegotiationComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  title: ElementFinder = element(by.id('is-order-price-negotiation-my-suffix-heading'));

  clickOnCreateButton() {
    return this.createButton.click();
  }

  getTitle() {
    return this.title;
  }
}
