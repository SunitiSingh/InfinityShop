/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceShipContainerPriceComponentsPage from './commerce-ship-container-price.page-object';
import CommerceShipContainerPriceUpdatePage from './commerce-ship-container-price-update.page-object';

const expect = chai.expect;

describe('CommerceShipContainerPrice e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceShipContainerPriceUpdatePage: CommerceShipContainerPriceUpdatePage;
  let commerceShipContainerPriceComponentsPage: CommerceShipContainerPriceComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceShipContainerPrices', async () => {
    navBarPage.getEntityPage('commerce-ship-container-price');
    commerceShipContainerPriceComponentsPage = new CommerceShipContainerPriceComponentsPage();
    expect(await commerceShipContainerPriceComponentsPage.getTitle().getText()).to.match(/Commerce Ship Container Prices/);
  });

  it('should load create CommerceShipContainerPrice page', async () => {
    commerceShipContainerPriceComponentsPage.clickOnCreateButton();
    commerceShipContainerPriceUpdatePage = new CommerceShipContainerPriceUpdatePage();
    expect(await commerceShipContainerPriceUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceShipContainerPrice/);
  });

  it('should create and save CommerceShipContainerPrices', async () => {
    commerceShipContainerPriceUpdatePage.setPriceInput('5');
    expect(await commerceShipContainerPriceUpdatePage.getPriceInput()).to.eq('5');
    await commerceShipContainerPriceUpdatePage.save();
    expect(await commerceShipContainerPriceUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
