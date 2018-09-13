/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceItemPriceNgComponentsPage from './commerce-item-price-ng.page-object';
import CommerceItemPriceNgUpdatePage from './commerce-item-price-ng-update.page-object';

const expect = chai.expect;

describe('CommerceItemPriceNg e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceItemPriceNgUpdatePage: CommerceItemPriceNgUpdatePage;
  let commerceItemPriceNgComponentsPage: CommerceItemPriceNgComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceItemPriceNgs', async () => {
    navBarPage.getEntityPage('commerce-item-price-ng');
    commerceItemPriceNgComponentsPage = new CommerceItemPriceNgComponentsPage();
    expect(await commerceItemPriceNgComponentsPage.getTitle().getText()).to.match(/Commerce Item Price Ngs/);
  });

  it('should load create CommerceItemPriceNg page', async () => {
    commerceItemPriceNgComponentsPage.clickOnCreateButton();
    commerceItemPriceNgUpdatePage = new CommerceItemPriceNgUpdatePage();
    expect(await commerceItemPriceNgUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceItemPriceNg/);
  });

  it('should create and save CommerceItemPriceNgs', async () => {
    commerceItemPriceNgUpdatePage.setPriceInput('5');
    expect(await commerceItemPriceNgUpdatePage.getPriceInput()).to.eq('5');
    commerceItemPriceNgUpdatePage.setNgidInput('ngid');
    expect(await commerceItemPriceNgUpdatePage.getNgidInput()).to.match(/ngid/);
    commerceItemPriceNgUpdatePage.commerceItemPriceSelectLastOption();
    await commerceItemPriceNgUpdatePage.save();
    expect(await commerceItemPriceNgUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
