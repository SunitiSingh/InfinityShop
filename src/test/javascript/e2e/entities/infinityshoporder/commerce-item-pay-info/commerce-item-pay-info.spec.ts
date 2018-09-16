/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceItemPayInfoComponentsPage from './commerce-item-pay-info.page-object';
import CommerceItemPayInfoUpdatePage from './commerce-item-pay-info-update.page-object';

const expect = chai.expect;

describe('CommerceItemPayInfo e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceItemPayInfoUpdatePage: CommerceItemPayInfoUpdatePage;
  let commerceItemPayInfoComponentsPage: CommerceItemPayInfoComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceItemPayInfos', async () => {
    navBarPage.getEntityPage('commerce-item-pay-info');
    commerceItemPayInfoComponentsPage = new CommerceItemPayInfoComponentsPage();
    expect(await commerceItemPayInfoComponentsPage.getTitle().getText()).to.match(/Commerce Item Pay Infos/);
  });

  it('should load create CommerceItemPayInfo page', async () => {
    commerceItemPayInfoComponentsPage.clickOnCreateButton();
    commerceItemPayInfoUpdatePage = new CommerceItemPayInfoUpdatePage();
    expect(await commerceItemPayInfoUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceItemPayInfo/);
  });

  it('should create and save CommerceItemPayInfos', async () => {
    commerceItemPayInfoUpdatePage.statusSelectLastOption();
    commerceItemPayInfoUpdatePage.setQuantityInput('5');
    expect(await commerceItemPayInfoUpdatePage.getQuantityInput()).to.eq('5');
    commerceItemPayInfoUpdatePage.orderPaymentSelectLastOption();
    await commerceItemPayInfoUpdatePage.save();
    expect(await commerceItemPayInfoUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
