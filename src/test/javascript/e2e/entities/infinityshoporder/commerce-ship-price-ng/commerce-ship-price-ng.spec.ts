/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceShipPriceNgComponentsPage from './commerce-ship-price-ng.page-object';
import CommerceShipPriceNgUpdatePage from './commerce-ship-price-ng-update.page-object';

const expect = chai.expect;

describe('CommerceShipPriceNg e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceShipPriceNgUpdatePage: CommerceShipPriceNgUpdatePage;
  let commerceShipPriceNgComponentsPage: CommerceShipPriceNgComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceShipPriceNgs', async () => {
    navBarPage.getEntityPage('commerce-ship-price-ng');
    commerceShipPriceNgComponentsPage = new CommerceShipPriceNgComponentsPage();
    expect(await commerceShipPriceNgComponentsPage.getTitle().getText()).to.match(/Commerce Ship Price Ngs/);
  });

  it('should load create CommerceShipPriceNg page', async () => {
    commerceShipPriceNgComponentsPage.clickOnCreateButton();
    commerceShipPriceNgUpdatePage = new CommerceShipPriceNgUpdatePage();
    expect(await commerceShipPriceNgUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceShipPriceNg/);
  });

  it('should create and save CommerceShipPriceNgs', async () => {
    commerceShipPriceNgUpdatePage.setPriceInput('5');
    expect(await commerceShipPriceNgUpdatePage.getPriceInput()).to.eq('5');
    commerceShipPriceNgUpdatePage.commerceShipContainerPriceSelectLastOption();
    await commerceShipPriceNgUpdatePage.save();
    expect(await commerceShipPriceNgUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
