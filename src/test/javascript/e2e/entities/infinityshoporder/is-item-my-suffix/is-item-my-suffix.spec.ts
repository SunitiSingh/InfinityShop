/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ISItemComponentsPage from './is-item-my-suffix.page-object';
import ISItemUpdatePage from './is-item-my-suffix-update.page-object';

const expect = chai.expect;

describe('ISItem e2e test', () => {
  let navBarPage: NavBarPage;
  let iSItemUpdatePage: ISItemUpdatePage;
  let iSItemComponentsPage: ISItemComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load ISItems', async () => {
    navBarPage.getEntityPage('is-item-my-suffix');
    iSItemComponentsPage = new ISItemComponentsPage();
    expect(await iSItemComponentsPage.getTitle().getText()).to.match(/IS Items/);
  });

  it('should load create ISItem page', async () => {
    iSItemComponentsPage.clickOnCreateButton();
    iSItemUpdatePage = new ISItemUpdatePage();
    expect(await iSItemUpdatePage.getPageTitle().getText()).to.match(/Create or edit a ISItem/);
  });

  it('should create and save ISItems', async () => {
    iSItemUpdatePage.setSkuidInput('skuid');
    expect(await iSItemUpdatePage.getSkuidInput()).to.match(/skuid/);
    iSItemUpdatePage.setQuantityInput('5');
    expect(await iSItemUpdatePage.getQuantityInput()).to.eq('5');
    iSItemUpdatePage.setCreationDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await iSItemUpdatePage.getCreationDateInput()).to.contain('2001-01-01T02:30');
    iSItemUpdatePage.setUpdateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await iSItemUpdatePage.getUpdateDateInput()).to.contain('2001-01-01T02:30');
    iSItemUpdatePage.iSOrderSelectLastOption();
    iSItemUpdatePage.priceSelectLastOption();
    // iSItemUpdatePage.shipcontainerSelectLastOption();
    // iSItemUpdatePage.paymentSelectLastOption();
    await iSItemUpdatePage.save();
    expect(await iSItemUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
