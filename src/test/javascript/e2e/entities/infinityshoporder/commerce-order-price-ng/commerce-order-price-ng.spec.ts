/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceOrderPriceNgComponentsPage from './commerce-order-price-ng.page-object';
import CommerceOrderPriceNgUpdatePage from './commerce-order-price-ng-update.page-object';

const expect = chai.expect;

describe('CommerceOrderPriceNg e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceOrderPriceNgUpdatePage: CommerceOrderPriceNgUpdatePage;
  let commerceOrderPriceNgComponentsPage: CommerceOrderPriceNgComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceOrderPriceNgs', async () => {
    navBarPage.getEntityPage('commerce-order-price-ng');
    commerceOrderPriceNgComponentsPage = new CommerceOrderPriceNgComponentsPage();
    expect(await commerceOrderPriceNgComponentsPage.getTitle().getText()).to.match(/Commerce Order Price Ngs/);
  });

  it('should load create CommerceOrderPriceNg page', async () => {
    commerceOrderPriceNgComponentsPage.clickOnCreateButton();
    commerceOrderPriceNgUpdatePage = new CommerceOrderPriceNgUpdatePage();
    expect(await commerceOrderPriceNgUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceOrderPriceNg/);
  });

  it('should create and save CommerceOrderPriceNgs', async () => {
    commerceOrderPriceNgUpdatePage.setPriceInput('5');
    expect(await commerceOrderPriceNgUpdatePage.getPriceInput()).to.eq('5');
    commerceOrderPriceNgUpdatePage.setNgidInput('ngid');
    expect(await commerceOrderPriceNgUpdatePage.getNgidInput()).to.match(/ngid/);
    commerceOrderPriceNgUpdatePage.commerceOrderPriceSelectLastOption();
    await commerceOrderPriceNgUpdatePage.save();
    expect(await commerceOrderPriceNgUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
