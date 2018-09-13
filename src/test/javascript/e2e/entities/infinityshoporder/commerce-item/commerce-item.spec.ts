/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceItemComponentsPage from './commerce-item.page-object';
import CommerceItemUpdatePage from './commerce-item-update.page-object';

const expect = chai.expect;

describe('CommerceItem e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceItemUpdatePage: CommerceItemUpdatePage;
  let commerceItemComponentsPage: CommerceItemComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceItems', async () => {
    navBarPage.getEntityPage('commerce-item');
    commerceItemComponentsPage = new CommerceItemComponentsPage();
    expect(await commerceItemComponentsPage.getTitle().getText()).to.match(/Commerce Items/);
  });

  it('should load create CommerceItem page', async () => {
    commerceItemComponentsPage.clickOnCreateButton();
    commerceItemUpdatePage = new CommerceItemUpdatePage();
    expect(await commerceItemUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceItem/);
  });

  it('should create and save CommerceItems', async () => {
    commerceItemUpdatePage.setSkuidInput('skuid');
    expect(await commerceItemUpdatePage.getSkuidInput()).to.match(/skuid/);
    commerceItemUpdatePage.setQuantityInput('5');
    expect(await commerceItemUpdatePage.getQuantityInput()).to.eq('5');
    commerceItemUpdatePage.setCreationDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await commerceItemUpdatePage.getCreationDateInput()).to.contain('2001-01-01T02:30');
    commerceItemUpdatePage.setUpdateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await commerceItemUpdatePage.getUpdateDateInput()).to.contain('2001-01-01T02:30');
    commerceItemUpdatePage.commerceOrderSelectLastOption();
    commerceItemUpdatePage.priceSelectLastOption();
    // commerceItemUpdatePage.shipcontainerSelectLastOption();
    // commerceItemUpdatePage.paymentSelectLastOption();
    await commerceItemUpdatePage.save();
    expect(await commerceItemUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
