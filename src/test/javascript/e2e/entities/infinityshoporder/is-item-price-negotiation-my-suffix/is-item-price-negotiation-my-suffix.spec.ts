/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ISItemPriceNegotiationComponentsPage from './is-item-price-negotiation-my-suffix.page-object';
import ISItemPriceNegotiationUpdatePage from './is-item-price-negotiation-my-suffix-update.page-object';

const expect = chai.expect;

describe('ISItemPriceNegotiation e2e test', () => {
  let navBarPage: NavBarPage;
  let iSItemPriceNegotiationUpdatePage: ISItemPriceNegotiationUpdatePage;
  let iSItemPriceNegotiationComponentsPage: ISItemPriceNegotiationComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load ISItemPriceNegotiations', async () => {
    navBarPage.getEntityPage('is-item-price-negotiation-my-suffix');
    iSItemPriceNegotiationComponentsPage = new ISItemPriceNegotiationComponentsPage();
    expect(await iSItemPriceNegotiationComponentsPage.getTitle().getText()).to.match(/IS Item Price Negotiations/);
  });

  it('should load create ISItemPriceNegotiation page', async () => {
    iSItemPriceNegotiationComponentsPage.clickOnCreateButton();
    iSItemPriceNegotiationUpdatePage = new ISItemPriceNegotiationUpdatePage();
    expect(await iSItemPriceNegotiationUpdatePage.getPageTitle().getText()).to.match(/Create or edit a ISItemPriceNegotiation/);
  });

  it('should create and save ISItemPriceNegotiations', async () => {
    iSItemPriceNegotiationUpdatePage.setPriceInput('5');
    expect(await iSItemPriceNegotiationUpdatePage.getPriceInput()).to.eq('5');
    iSItemPriceNegotiationUpdatePage.setNegotiationidInput('negotiationid');
    expect(await iSItemPriceNegotiationUpdatePage.getNegotiationidInput()).to.match(/negotiationid/);
    iSItemPriceNegotiationUpdatePage.iSItemPriceSelectLastOption();
    await iSItemPriceNegotiationUpdatePage.save();
    expect(await iSItemPriceNegotiationUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
