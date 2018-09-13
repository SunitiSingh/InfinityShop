/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceShippingContainerComponentsPage from './commerce-shipping-container-my-suffix.page-object';
import CommerceShippingContainerUpdatePage from './commerce-shipping-container-my-suffix-update.page-object';

const expect = chai.expect;

describe('CommerceShippingContainer e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceShippingContainerUpdatePage: CommerceShippingContainerUpdatePage;
  let commerceShippingContainerComponentsPage: CommerceShippingContainerComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceShippingContainers', async () => {
    navBarPage.getEntityPage('commerce-shipping-container-my-suffix');
    commerceShippingContainerComponentsPage = new CommerceShippingContainerComponentsPage();
    expect(await commerceShippingContainerComponentsPage.getTitle().getText()).to.match(/Commerce Shipping Containers/);
  });

  it('should load create CommerceShippingContainer page', async () => {
    commerceShippingContainerComponentsPage.clickOnCreateButton();
    commerceShippingContainerUpdatePage = new CommerceShippingContainerUpdatePage();
    expect(await commerceShippingContainerUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceShippingContainer/);
  });

  it('should create and save CommerceShippingContainers', async () => {
    commerceShippingContainerUpdatePage.shipstatusSelectLastOption();
    commerceShippingContainerUpdatePage.setCarrierInput('carrier');
    expect(await commerceShippingContainerUpdatePage.getCarrierInput()).to.match(/carrier/);
    commerceShippingContainerUpdatePage.setCreationDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await commerceShippingContainerUpdatePage.getCreationDateInput()).to.contain('2001-01-01T02:30');
    commerceShippingContainerUpdatePage.setUpdateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await commerceShippingContainerUpdatePage.getUpdateDateInput()).to.contain('2001-01-01T02:30');
    commerceShippingContainerUpdatePage.commerceOrderSelectLastOption();
    commerceShippingContainerUpdatePage.priceSelectLastOption();
    await commerceShippingContainerUpdatePage.save();
    expect(await commerceShippingContainerUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
