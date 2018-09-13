/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ISOrderPriceComponentsPage from './is-order-price-my-suffix.page-object';
import ISOrderPriceUpdatePage from './is-order-price-my-suffix-update.page-object';

const expect = chai.expect;

describe('ISOrderPrice e2e test', () => {
  let navBarPage: NavBarPage;
  let iSOrderPriceUpdatePage: ISOrderPriceUpdatePage;
  let iSOrderPriceComponentsPage: ISOrderPriceComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load ISOrderPrices', async () => {
    navBarPage.getEntityPage('is-order-price-my-suffix');
    iSOrderPriceComponentsPage = new ISOrderPriceComponentsPage();
    expect(await iSOrderPriceComponentsPage.getTitle().getText()).to.match(/IS Order Prices/);
  });

  it('should load create ISOrderPrice page', async () => {
    iSOrderPriceComponentsPage.clickOnCreateButton();
    iSOrderPriceUpdatePage = new ISOrderPriceUpdatePage();
    expect(await iSOrderPriceUpdatePage.getPageTitle().getText()).to.match(/Create or edit a ISOrderPrice/);
  });

  it('should create and save ISOrderPrices', async () => {
    iSOrderPriceUpdatePage.setNameInput('name');
    expect(await iSOrderPriceUpdatePage.getNameInput()).to.match(/name/);
    iSOrderPriceUpdatePage.setPriceInput('5');
    expect(await iSOrderPriceUpdatePage.getPriceInput()).to.eq('5');
    iSOrderPriceUpdatePage.iSOrderSelectLastOption();
    await iSOrderPriceUpdatePage.save();
    expect(await iSOrderPriceUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
