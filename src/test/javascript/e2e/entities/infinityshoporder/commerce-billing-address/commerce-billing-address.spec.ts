/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceBillingAddressComponentsPage from './commerce-billing-address.page-object';
import CommerceBillingAddressUpdatePage from './commerce-billing-address-update.page-object';

const expect = chai.expect;

describe('CommerceBillingAddress e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceBillingAddressUpdatePage: CommerceBillingAddressUpdatePage;
  let commerceBillingAddressComponentsPage: CommerceBillingAddressComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceBillingAddresses', async () => {
    navBarPage.getEntityPage('commerce-billing-address');
    commerceBillingAddressComponentsPage = new CommerceBillingAddressComponentsPage();
    expect(await commerceBillingAddressComponentsPage.getTitle().getText()).to.match(/Commerce Billing Addresses/);
  });

  it('should load create CommerceBillingAddress page', async () => {
    commerceBillingAddressComponentsPage.clickOnCreateButton();
    commerceBillingAddressUpdatePage = new CommerceBillingAddressUpdatePage();
    expect(await commerceBillingAddressUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceBillingAddress/);
  });

  it('should create and save CommerceBillingAddresses', async () => {
    commerceBillingAddressUpdatePage.setAddress1Input('address1');
    expect(await commerceBillingAddressUpdatePage.getAddress1Input()).to.match(/address1/);
    commerceBillingAddressUpdatePage.setAddress2Input('address2');
    expect(await commerceBillingAddressUpdatePage.getAddress2Input()).to.match(/address2/);
    commerceBillingAddressUpdatePage.setCityInput('city');
    expect(await commerceBillingAddressUpdatePage.getCityInput()).to.match(/city/);
    commerceBillingAddressUpdatePage.setPostalcodeInput('postalcode');
    expect(await commerceBillingAddressUpdatePage.getPostalcodeInput()).to.match(/postalcode/);
    commerceBillingAddressUpdatePage.setCreateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await commerceBillingAddressUpdatePage.getCreateDateInput()).to.contain('2001-01-01T02:30');
    commerceBillingAddressUpdatePage.setUpdateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await commerceBillingAddressUpdatePage.getUpdateDateInput()).to.contain('2001-01-01T02:30');
    await commerceBillingAddressUpdatePage.save();
    expect(await commerceBillingAddressUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
