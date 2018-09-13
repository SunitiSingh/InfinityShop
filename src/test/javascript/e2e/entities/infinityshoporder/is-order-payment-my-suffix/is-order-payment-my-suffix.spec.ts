/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ISOrderPaymentComponentsPage from './is-order-payment-my-suffix.page-object';
import ISOrderPaymentUpdatePage from './is-order-payment-my-suffix-update.page-object';

const expect = chai.expect;

describe('ISOrderPayment e2e test', () => {
  let navBarPage: NavBarPage;
  let iSOrderPaymentUpdatePage: ISOrderPaymentUpdatePage;
  let iSOrderPaymentComponentsPage: ISOrderPaymentComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load ISOrderPayments', async () => {
    navBarPage.getEntityPage('is-order-payment-my-suffix');
    iSOrderPaymentComponentsPage = new ISOrderPaymentComponentsPage();
    expect(await iSOrderPaymentComponentsPage.getTitle().getText()).to.match(/IS Order Payments/);
  });

  it('should load create ISOrderPayment page', async () => {
    iSOrderPaymentComponentsPage.clickOnCreateButton();
    iSOrderPaymentUpdatePage = new ISOrderPaymentUpdatePage();
    expect(await iSOrderPaymentUpdatePage.getPageTitle().getText()).to.match(/Create or edit a ISOrderPayment/);
  });

  it('should create and save ISOrderPayments', async () => {
    iSOrderPaymentUpdatePage.paystatusSelectLastOption();
    iSOrderPaymentUpdatePage.setPaymentAmountInput('5');
    expect(await iSOrderPaymentUpdatePage.getPaymentAmountInput()).to.eq('5');
    iSOrderPaymentUpdatePage.paymentTypeSelectLastOption();
    iSOrderPaymentUpdatePage.setFirstNameInput('firstName');
    expect(await iSOrderPaymentUpdatePage.getFirstNameInput()).to.match(/firstName/);
    iSOrderPaymentUpdatePage.setLastNameInput('lastName');
    expect(await iSOrderPaymentUpdatePage.getLastNameInput()).to.match(/lastName/);
    iSOrderPaymentUpdatePage.setBillingPhoneInput('billingPhone');
    expect(await iSOrderPaymentUpdatePage.getBillingPhoneInput()).to.match(/billingPhone/);
    iSOrderPaymentUpdatePage.iSOrderSelectLastOption();
    iSOrderPaymentUpdatePage.cardSelectLastOption();
    iSOrderPaymentUpdatePage.epaySelectLastOption();
    iSOrderPaymentUpdatePage.billingAddressSelectLastOption();
    await iSOrderPaymentUpdatePage.save();
    expect(await iSOrderPaymentUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
