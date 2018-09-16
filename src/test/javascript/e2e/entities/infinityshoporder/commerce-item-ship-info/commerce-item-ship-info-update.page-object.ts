import { element, by, ElementFinder } from 'protractor';

export default class CommerceItemShipInfoUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderCommerceItemShipInfo.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  statusSelect: ElementFinder = element(by.css('select#commerce-item-ship-info-status'));
  quantityInput: ElementFinder = element(by.css('input#commerce-item-ship-info-quantity'));
  shipContainerSelect: ElementFinder = element(by.css('select#commerce-item-ship-info-shipContainer'));

  getPageTitle() {
    return this.pageTitle;
  }

  setStatusSelect(status) {
    this.statusSelect.sendKeys(status);
  }

  getStatusSelect() {
    return this.statusSelect.element(by.css('option:checked')).getText();
  }

  statusSelectLastOption() {
    this.statusSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setQuantityInput(quantity) {
    this.quantityInput.sendKeys(quantity);
  }

  getQuantityInput() {
    return this.quantityInput.getAttribute('value');
  }

  shipContainerSelectLastOption() {
    this.shipContainerSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  shipContainerSelectOption(option) {
    this.shipContainerSelect.sendKeys(option);
  }

  getShipContainerSelect() {
    return this.shipContainerSelect;
  }

  getShipContainerSelectedOption() {
    return this.shipContainerSelect.element(by.css('option:checked')).getText();
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
