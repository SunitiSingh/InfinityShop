/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ISItemPriceComponentsPage from './is-item-price-my-suffix.page-object';
import ISItemPriceUpdatePage from './is-item-price-my-suffix-update.page-object';

const expect = chai.expect;

describe('ISItemPrice e2e test', () => {
  let navBarPage: NavBarPage;
  let iSItemPriceUpdatePage: ISItemPriceUpdatePage;
  let iSItemPriceComponentsPage: ISItemPriceComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load ISItemPrices', async () => {
    navBarPage.getEntityPage('is-item-price-my-suffix');
    iSItemPriceComponentsPage = new ISItemPriceComponentsPage();
    expect(await iSItemPriceComponentsPage.getTitle().getText()).to.match(/IS Item Prices/);
  });

  it('should load create ISItemPrice page', async () => {
    iSItemPriceComponentsPage.clickOnCreateButton();
    iSItemPriceUpdatePage = new ISItemPriceUpdatePage();
    expect(await iSItemPriceUpdatePage.getPageTitle().getText()).to.match(/Create or edit a ISItemPrice/);
  });

  it('should create and save ISItemPrices', async () => {
    iSItemPriceUpdatePage.setPriceInput('5');
    expect(await iSItemPriceUpdatePage.getPriceInput()).to.eq('5');
    await iSItemPriceUpdatePage.save();
    expect(await iSItemPriceUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
