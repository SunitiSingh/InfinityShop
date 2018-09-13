/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommercePaymentCardComponentsPage from './commerce-payment-card-my-suffix.page-object';
import CommercePaymentCardUpdatePage from './commerce-payment-card-my-suffix-update.page-object';

const expect = chai.expect;

describe('CommercePaymentCard e2e test', () => {
  let navBarPage: NavBarPage;
  let commercePaymentCardUpdatePage: CommercePaymentCardUpdatePage;
  let commercePaymentCardComponentsPage: CommercePaymentCardComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommercePaymentCards', async () => {
    navBarPage.getEntityPage('commerce-payment-card-my-suffix');
    commercePaymentCardComponentsPage = new CommercePaymentCardComponentsPage();
    expect(await commercePaymentCardComponentsPage.getTitle().getText()).to.match(/Commerce Payment Cards/);
  });

  it('should load create CommercePaymentCard page', async () => {
    commercePaymentCardComponentsPage.clickOnCreateButton();
    commercePaymentCardUpdatePage = new CommercePaymentCardUpdatePage();
    expect(await commercePaymentCardUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommercePaymentCard/);
  });

  it('should create and save CommercePaymentCards', async () => {
    commercePaymentCardUpdatePage.setCardTypeInput('cardType');
    expect(await commercePaymentCardUpdatePage.getCardTypeInput()).to.match(/cardType/);
    commercePaymentCardUpdatePage.setCardNumberInput('cardNumber');
    expect(await commercePaymentCardUpdatePage.getCardNumberInput()).to.match(/cardNumber/);
    commercePaymentCardUpdatePage.setExpMonthInput('5');
    expect(await commercePaymentCardUpdatePage.getExpMonthInput()).to.eq('5');
    commercePaymentCardUpdatePage.setExpYearInput('5');
    expect(await commercePaymentCardUpdatePage.getExpYearInput()).to.eq('5');
    commercePaymentCardUpdatePage.setCreateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await commercePaymentCardUpdatePage.getCreateDateInput()).to.contain('2001-01-01T02:30');
    commercePaymentCardUpdatePage.setUpdateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await commercePaymentCardUpdatePage.getUpdateDateInput()).to.contain('2001-01-01T02:30');
    await commercePaymentCardUpdatePage.save();
    expect(await commercePaymentCardUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
