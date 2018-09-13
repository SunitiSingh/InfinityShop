/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ISOrderPriceNegotiationComponentsPage from './is-order-price-negotiation-my-suffix.page-object';
import ISOrderPriceNegotiationUpdatePage from './is-order-price-negotiation-my-suffix-update.page-object';

const expect = chai.expect;

describe('ISOrderPriceNegotiation e2e test', () => {
  let navBarPage: NavBarPage;
  let iSOrderPriceNegotiationUpdatePage: ISOrderPriceNegotiationUpdatePage;
  let iSOrderPriceNegotiationComponentsPage: ISOrderPriceNegotiationComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load ISOrderPriceNegotiations', async () => {
    navBarPage.getEntityPage('is-order-price-negotiation-my-suffix');
    iSOrderPriceNegotiationComponentsPage = new ISOrderPriceNegotiationComponentsPage();
    expect(await iSOrderPriceNegotiationComponentsPage.getTitle().getText()).to.match(/IS Order Price Negotiations/);
  });

  it('should load create ISOrderPriceNegotiation page', async () => {
    iSOrderPriceNegotiationComponentsPage.clickOnCreateButton();
    iSOrderPriceNegotiationUpdatePage = new ISOrderPriceNegotiationUpdatePage();
    expect(await iSOrderPriceNegotiationUpdatePage.getPageTitle().getText()).to.match(/Create or edit a ISOrderPriceNegotiation/);
  });

  it('should create and save ISOrderPriceNegotiations', async () => {
    iSOrderPriceNegotiationUpdatePage.setPriceInput('5');
    expect(await iSOrderPriceNegotiationUpdatePage.getPriceInput()).to.eq('5');
    iSOrderPriceNegotiationUpdatePage.setNegotiationidInput('negotiationid');
    expect(await iSOrderPriceNegotiationUpdatePage.getNegotiationidInput()).to.match(/negotiationid/);
    iSOrderPriceNegotiationUpdatePage.iSOrderPriceSelectLastOption();
    await iSOrderPriceNegotiationUpdatePage.save();
    expect(await iSOrderPriceNegotiationUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
