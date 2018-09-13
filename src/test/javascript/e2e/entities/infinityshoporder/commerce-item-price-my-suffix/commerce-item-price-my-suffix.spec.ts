/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceItemPriceComponentsPage from './commerce-item-price-my-suffix.page-object';
import CommerceItemPriceUpdatePage from './commerce-item-price-my-suffix-update.page-object';

const expect = chai.expect;

describe('CommerceItemPrice e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceItemPriceUpdatePage: CommerceItemPriceUpdatePage;
  let commerceItemPriceComponentsPage: CommerceItemPriceComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceItemPrices', async () => {
    navBarPage.getEntityPage('commerce-item-price-my-suffix');
    commerceItemPriceComponentsPage = new CommerceItemPriceComponentsPage();
    expect(await commerceItemPriceComponentsPage.getTitle().getText()).to.match(/Commerce Item Prices/);
  });

  it('should load create CommerceItemPrice page', async () => {
    commerceItemPriceComponentsPage.clickOnCreateButton();
    commerceItemPriceUpdatePage = new CommerceItemPriceUpdatePage();
    expect(await commerceItemPriceUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceItemPrice/);
  });

  it('should create and save CommerceItemPrices', async () => {
    commerceItemPriceUpdatePage.setPriceInput('5');
    expect(await commerceItemPriceUpdatePage.getPriceInput()).to.eq('5');
    await commerceItemPriceUpdatePage.save();
    expect(await commerceItemPriceUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
