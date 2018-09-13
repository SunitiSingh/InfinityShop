import { element, by, ElementFinder } from 'protractor';

export default class CommerceShipPriceNgComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  title: ElementFinder = element(by.id('commerce-ship-price-ng-my-suffix-heading'));

  clickOnCreateButton() {
    return this.createButton.click();
  }

  getTitle() {
    return this.title;
  }
}
