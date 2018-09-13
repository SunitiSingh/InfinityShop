/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceOrderPaymentComponentsPage from './commerce-order-payment.page-object';
import CommerceOrderPaymentUpdatePage from './commerce-order-payment-update.page-object';

const expect = chai.expect;

describe('CommerceOrderPayment e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceOrderPaymentUpdatePage: CommerceOrderPaymentUpdatePage;
  let commerceOrderPaymentComponentsPage: CommerceOrderPaymentComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceOrderPayments', async () => {
    navBarPage.getEntityPage('commerce-order-payment');
    commerceOrderPaymentComponentsPage = new CommerceOrderPaymentComponentsPage();
    expect(await commerceOrderPaymentComponentsPage.getTitle().getText()).to.match(/Commerce Order Payments/);
  });

  it('should load create CommerceOrderPayment page', async () => {
    commerceOrderPaymentComponentsPage.clickOnCreateButton();
    commerceOrderPaymentUpdatePage = new CommerceOrderPaymentUpdatePage();
    expect(await commerceOrderPaymentUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceOrderPayment/);
  });

  it('should create and save CommerceOrderPayments', async () => {
    commerceOrderPaymentUpdatePage.paystatusSelectLastOption();
    commerceOrderPaymentUpdatePage.setPaymentAmountInput('5');
    expect(await commerceOrderPaymentUpdatePage.getPaymentAmountInput()).to.eq('5');
    commerceOrderPaymentUpdatePage.paymentTypeSelectLastOption();
    commerceOrderPaymentUpdatePage.setFirstNameInput('firstName');
    expect(await commerceOrderPaymentUpdatePage.getFirstNameInput()).to.match(/firstName/);
    commerceOrderPaymentUpdatePage.setLastNameInput('lastName');
    expect(await commerceOrderPaymentUpdatePage.getLastNameInput()).to.match(/lastName/);
    commerceOrderPaymentUpdatePage.setBillingPhoneInput('billingPhone');
    expect(await commerceOrderPaymentUpdatePage.getBillingPhoneInput()).to.match(/billingPhone/);
    commerceOrderPaymentUpdatePage.commerceOrderSelectLastOption();
    commerceOrderPaymentUpdatePage.cardSelectLastOption();
    commerceOrderPaymentUpdatePage.epaySelectLastOption();
    commerceOrderPaymentUpdatePage.billingAddressSelectLastOption();
    await commerceOrderPaymentUpdatePage.save();
    expect(await commerceOrderPaymentUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
