import { element, by, ElementFinder } from 'protractor';

export default class CommerceOrderUpdatePage {
  pageTitle: ElementFinder = element(by.id('infinityshopApp.infinityshoporderCommerceOrder.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  statusSelect: ElementFinder = element(by.css('select#commerce-order-status'));
  custidInput: ElementFinder = element(by.css('input#commerce-order-custid'));
  creationDateInput: ElementFinder = element(by.css('input#commerce-order-creationDate'));
  placedDateInput: ElementFinder = element(by.css('input#commerce-order-placedDate'));
  updateDateInput: ElementFinder = element(by.css('input#commerce-order-updateDate'));

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
  setCustidInput(custid) {
    this.custidInput.sendKeys(custid);
  }

  getCustidInput() {
    return this.custidInput.getAttribute('value');
  }

  setCreationDateInput(creationDate) {
    this.creationDateInput.sendKeys(creationDate);
  }

  getCreationDateInput() {
    return this.creationDateInput.getAttribute('value');
  }

  setPlacedDateInput(placedDate) {
    this.placedDateInput.sendKeys(placedDate);
  }

  getPlacedDateInput() {
    return this.placedDateInput.getAttribute('value');
  }

  setUpdateDateInput(updateDate) {
    this.updateDateInput.sendKeys(updateDate);
  }

  getUpdateDateInput() {
    return this.updateDateInput.getAttribute('value');
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
