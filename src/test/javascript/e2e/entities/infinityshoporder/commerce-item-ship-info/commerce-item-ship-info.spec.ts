/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceItemShipInfoComponentsPage from './commerce-item-ship-info.page-object';
import CommerceItemShipInfoUpdatePage from './commerce-item-ship-info-update.page-object';

const expect = chai.expect;

describe('CommerceItemShipInfo e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceItemShipInfoUpdatePage: CommerceItemShipInfoUpdatePage;
  let commerceItemShipInfoComponentsPage: CommerceItemShipInfoComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceItemShipInfos', async () => {
    navBarPage.getEntityPage('commerce-item-ship-info');
    commerceItemShipInfoComponentsPage = new CommerceItemShipInfoComponentsPage();
    expect(await commerceItemShipInfoComponentsPage.getTitle().getText()).to.match(/Commerce Item Ship Infos/);
  });

  it('should load create CommerceItemShipInfo page', async () => {
    commerceItemShipInfoComponentsPage.clickOnCreateButton();
    commerceItemShipInfoUpdatePage = new CommerceItemShipInfoUpdatePage();
    expect(await commerceItemShipInfoUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceItemShipInfo/);
  });

  it('should create and save CommerceItemShipInfos', async () => {
    commerceItemShipInfoUpdatePage.statusSelectLastOption();
    commerceItemShipInfoUpdatePage.setQuantityInput('5');
    expect(await commerceItemShipInfoUpdatePage.getQuantityInput()).to.eq('5');
    commerceItemShipInfoUpdatePage.shipContainerSelectLastOption();
    await commerceItemShipInfoUpdatePage.save();
    expect(await commerceItemShipInfoUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
