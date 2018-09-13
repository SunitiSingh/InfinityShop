/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ISShipPriceNegotiationComponentsPage from './is-ship-price-negotiation-my-suffix.page-object';
import ISShipPriceNegotiationUpdatePage from './is-ship-price-negotiation-my-suffix-update.page-object';

const expect = chai.expect;

describe('ISShipPriceNegotiation e2e test', () => {
  let navBarPage: NavBarPage;
  let iSShipPriceNegotiationUpdatePage: ISShipPriceNegotiationUpdatePage;
  let iSShipPriceNegotiationComponentsPage: ISShipPriceNegotiationComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load ISShipPriceNegotiations', async () => {
    navBarPage.getEntityPage('is-ship-price-negotiation-my-suffix');
    iSShipPriceNegotiationComponentsPage = new ISShipPriceNegotiationComponentsPage();
    expect(await iSShipPriceNegotiationComponentsPage.getTitle().getText()).to.match(/IS Ship Price Negotiations/);
  });

  it('should load create ISShipPriceNegotiation page', async () => {
    iSShipPriceNegotiationComponentsPage.clickOnCreateButton();
    iSShipPriceNegotiationUpdatePage = new ISShipPriceNegotiationUpdatePage();
    expect(await iSShipPriceNegotiationUpdatePage.getPageTitle().getText()).to.match(/Create or edit a ISShipPriceNegotiation/);
  });

  it('should create and save ISShipPriceNegotiations', async () => {
    iSShipPriceNegotiationUpdatePage.setPriceInput('5');
    expect(await iSShipPriceNegotiationUpdatePage.getPriceInput()).to.eq('5');
    iSShipPriceNegotiationUpdatePage.iSShipContainerPriceSelectLastOption();
    await iSShipPriceNegotiationUpdatePage.save();
    expect(await iSShipPriceNegotiationUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
