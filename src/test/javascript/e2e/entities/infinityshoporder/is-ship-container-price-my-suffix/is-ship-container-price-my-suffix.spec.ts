/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ISShipContainerPriceComponentsPage from './is-ship-container-price-my-suffix.page-object';
import ISShipContainerPriceUpdatePage from './is-ship-container-price-my-suffix-update.page-object';

const expect = chai.expect;

describe('ISShipContainerPrice e2e test', () => {
  let navBarPage: NavBarPage;
  let iSShipContainerPriceUpdatePage: ISShipContainerPriceUpdatePage;
  let iSShipContainerPriceComponentsPage: ISShipContainerPriceComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load ISShipContainerPrices', async () => {
    navBarPage.getEntityPage('is-ship-container-price-my-suffix');
    iSShipContainerPriceComponentsPage = new ISShipContainerPriceComponentsPage();
    expect(await iSShipContainerPriceComponentsPage.getTitle().getText()).to.match(/IS Ship Container Prices/);
  });

  it('should load create ISShipContainerPrice page', async () => {
    iSShipContainerPriceComponentsPage.clickOnCreateButton();
    iSShipContainerPriceUpdatePage = new ISShipContainerPriceUpdatePage();
    expect(await iSShipContainerPriceUpdatePage.getPageTitle().getText()).to.match(/Create or edit a ISShipContainerPrice/);
  });

  it('should create and save ISShipContainerPrices', async () => {
    iSShipContainerPriceUpdatePage.setPriceInput('5');
    expect(await iSShipContainerPriceUpdatePage.getPriceInput()).to.eq('5');
    await iSShipContainerPriceUpdatePage.save();
    expect(await iSShipContainerPriceUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
