/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ISPaymentCardComponentsPage from './is-payment-card-my-suffix.page-object';
import ISPaymentCardUpdatePage from './is-payment-card-my-suffix-update.page-object';

const expect = chai.expect;

describe('ISPaymentCard e2e test', () => {
  let navBarPage: NavBarPage;
  let iSPaymentCardUpdatePage: ISPaymentCardUpdatePage;
  let iSPaymentCardComponentsPage: ISPaymentCardComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load ISPaymentCards', async () => {
    navBarPage.getEntityPage('is-payment-card-my-suffix');
    iSPaymentCardComponentsPage = new ISPaymentCardComponentsPage();
    expect(await iSPaymentCardComponentsPage.getTitle().getText()).to.match(/IS Payment Cards/);
  });

  it('should load create ISPaymentCard page', async () => {
    iSPaymentCardComponentsPage.clickOnCreateButton();
    iSPaymentCardUpdatePage = new ISPaymentCardUpdatePage();
    expect(await iSPaymentCardUpdatePage.getPageTitle().getText()).to.match(/Create or edit a ISPaymentCard/);
  });

  it('should create and save ISPaymentCards', async () => {
    iSPaymentCardUpdatePage.setCardTypeInput('cardType');
    expect(await iSPaymentCardUpdatePage.getCardTypeInput()).to.match(/cardType/);
    iSPaymentCardUpdatePage.setCardNumberInput('cardNumber');
    expect(await iSPaymentCardUpdatePage.getCardNumberInput()).to.match(/cardNumber/);
    iSPaymentCardUpdatePage.setExpMonthInput('5');
    expect(await iSPaymentCardUpdatePage.getExpMonthInput()).to.eq('5');
    iSPaymentCardUpdatePage.setExpYearInput('5');
    expect(await iSPaymentCardUpdatePage.getExpYearInput()).to.eq('5');
    iSPaymentCardUpdatePage.setCreateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await iSPaymentCardUpdatePage.getCreateDateInput()).to.contain('2001-01-01T02:30');
    iSPaymentCardUpdatePage.setUpdateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await iSPaymentCardUpdatePage.getUpdateDateInput()).to.contain('2001-01-01T02:30');
    await iSPaymentCardUpdatePage.save();
    expect(await iSPaymentCardUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
