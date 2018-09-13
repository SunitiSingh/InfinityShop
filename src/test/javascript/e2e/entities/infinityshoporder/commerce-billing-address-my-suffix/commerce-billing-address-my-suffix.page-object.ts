import { element, by, ElementFinder } from 'protractor';

export default class CommerceBillingAddressComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  title: ElementFinder = element(by.id('commerce-billing-address-my-suffix-heading'));

  clickOnCreateButton() {
    return this.createButton.click();
  }

  getTitle() {
    return this.title;
  }
}
