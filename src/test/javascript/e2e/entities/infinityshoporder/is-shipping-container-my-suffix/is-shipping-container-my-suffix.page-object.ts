import { element, by, ElementFinder } from 'protractor';

export default class ISShippingContainerComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  title: ElementFinder = element(by.id('is-shipping-container-my-suffix-heading'));

  clickOnCreateButton() {
    return this.createButton.click();
  }

  getTitle() {
    return this.title;
  }
}
