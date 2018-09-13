/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ISBillingAddressComponentsPage from './is-billing-address-my-suffix.page-object';
import ISBillingAddressUpdatePage from './is-billing-address-my-suffix-update.page-object';

const expect = chai.expect;

describe('ISBillingAddress e2e test', () => {
  let navBarPage: NavBarPage;
  let iSBillingAddressUpdatePage: ISBillingAddressUpdatePage;
  let iSBillingAddressComponentsPage: ISBillingAddressComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load ISBillingAddresses', async () => {
    navBarPage.getEntityPage('is-billing-address-my-suffix');
    iSBillingAddressComponentsPage = new ISBillingAddressComponentsPage();
    expect(await iSBillingAddressComponentsPage.getTitle().getText()).to.match(/IS Billing Addresses/);
  });

  it('should load create ISBillingAddress page', async () => {
    iSBillingAddressComponentsPage.clickOnCreateButton();
    iSBillingAddressUpdatePage = new ISBillingAddressUpdatePage();
    expect(await iSBillingAddressUpdatePage.getPageTitle().getText()).to.match(/Create or edit a ISBillingAddress/);
  });

  it('should create and save ISBillingAddresses', async () => {
    iSBillingAddressUpdatePage.setAddress1Input('address1');
    expect(await iSBillingAddressUpdatePage.getAddress1Input()).to.match(/address1/);
    iSBillingAddressUpdatePage.setAddress2Input('address2');
    expect(await iSBillingAddressUpdatePage.getAddress2Input()).to.match(/address2/);
    iSBillingAddressUpdatePage.setCityInput('city');
    expect(await iSBillingAddressUpdatePage.getCityInput()).to.match(/city/);
    iSBillingAddressUpdatePage.setPostalcodeInput('postalcode');
    expect(await iSBillingAddressUpdatePage.getPostalcodeInput()).to.match(/postalcode/);
    iSBillingAddressUpdatePage.setCreateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await iSBillingAddressUpdatePage.getCreateDateInput()).to.contain('2001-01-01T02:30');
    iSBillingAddressUpdatePage.setUpdateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await iSBillingAddressUpdatePage.getUpdateDateInput()).to.contain('2001-01-01T02:30');
    await iSBillingAddressUpdatePage.save();
    expect(await iSBillingAddressUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
