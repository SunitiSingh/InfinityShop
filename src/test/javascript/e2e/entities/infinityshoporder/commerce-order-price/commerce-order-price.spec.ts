/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceOrderPriceComponentsPage from './commerce-order-price.page-object';
import CommerceOrderPriceUpdatePage from './commerce-order-price-update.page-object';

const expect = chai.expect;

describe('CommerceOrderPrice e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceOrderPriceUpdatePage: CommerceOrderPriceUpdatePage;
  let commerceOrderPriceComponentsPage: CommerceOrderPriceComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceOrderPrices', async () => {
    navBarPage.getEntityPage('commerce-order-price');
    commerceOrderPriceComponentsPage = new CommerceOrderPriceComponentsPage();
    expect(await commerceOrderPriceComponentsPage.getTitle().getText()).to.match(/Commerce Order Prices/);
  });

  it('should load create CommerceOrderPrice page', async () => {
    commerceOrderPriceComponentsPage.clickOnCreateButton();
    commerceOrderPriceUpdatePage = new CommerceOrderPriceUpdatePage();
    expect(await commerceOrderPriceUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceOrderPrice/);
  });

  it('should create and save CommerceOrderPrices', async () => {
    commerceOrderPriceUpdatePage.setNameInput('name');
    expect(await commerceOrderPriceUpdatePage.getNameInput()).to.match(/name/);
    commerceOrderPriceUpdatePage.setPriceInput('5');
    expect(await commerceOrderPriceUpdatePage.getPriceInput()).to.eq('5');
    commerceOrderPriceUpdatePage.commerceOrderSelectLastOption();
    await commerceOrderPriceUpdatePage.save();
    expect(await commerceOrderPriceUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
