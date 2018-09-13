/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ISShippingContainerComponentsPage from './is-shipping-container-my-suffix.page-object';
import ISShippingContainerUpdatePage from './is-shipping-container-my-suffix-update.page-object';

const expect = chai.expect;

describe('ISShippingContainer e2e test', () => {
  let navBarPage: NavBarPage;
  let iSShippingContainerUpdatePage: ISShippingContainerUpdatePage;
  let iSShippingContainerComponentsPage: ISShippingContainerComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load ISShippingContainers', async () => {
    navBarPage.getEntityPage('is-shipping-container-my-suffix');
    iSShippingContainerComponentsPage = new ISShippingContainerComponentsPage();
    expect(await iSShippingContainerComponentsPage.getTitle().getText()).to.match(/IS Shipping Containers/);
  });

  it('should load create ISShippingContainer page', async () => {
    iSShippingContainerComponentsPage.clickOnCreateButton();
    iSShippingContainerUpdatePage = new ISShippingContainerUpdatePage();
    expect(await iSShippingContainerUpdatePage.getPageTitle().getText()).to.match(/Create or edit a ISShippingContainer/);
  });

  it('should create and save ISShippingContainers', async () => {
    iSShippingContainerUpdatePage.shipstatusSelectLastOption();
    iSShippingContainerUpdatePage.setCarrierInput('carrier');
    expect(await iSShippingContainerUpdatePage.getCarrierInput()).to.match(/carrier/);
    iSShippingContainerUpdatePage.setCreationDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await iSShippingContainerUpdatePage.getCreationDateInput()).to.contain('2001-01-01T02:30');
    iSShippingContainerUpdatePage.setUpdateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await iSShippingContainerUpdatePage.getUpdateDateInput()).to.contain('2001-01-01T02:30');
    iSShippingContainerUpdatePage.iSOrderSelectLastOption();
    iSShippingContainerUpdatePage.priceSelectLastOption();
    await iSShippingContainerUpdatePage.save();
    expect(await iSShippingContainerUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
