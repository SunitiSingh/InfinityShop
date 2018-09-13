/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ISOrderComponentsPage from './is-order-my-suffix.page-object';
import ISOrderUpdatePage from './is-order-my-suffix-update.page-object';

const expect = chai.expect;

describe('ISOrder e2e test', () => {
  let navBarPage: NavBarPage;
  let iSOrderUpdatePage: ISOrderUpdatePage;
  let iSOrderComponentsPage: ISOrderComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load ISOrders', async () => {
    navBarPage.getEntityPage('is-order-my-suffix');
    iSOrderComponentsPage = new ISOrderComponentsPage();
    expect(await iSOrderComponentsPage.getTitle().getText()).to.match(/IS Orders/);
  });

  it('should load create ISOrder page', async () => {
    iSOrderComponentsPage.clickOnCreateButton();
    iSOrderUpdatePage = new ISOrderUpdatePage();
    expect(await iSOrderUpdatePage.getPageTitle().getText()).to.match(/Create or edit a ISOrder/);
  });

  it('should create and save ISOrders', async () => {
    iSOrderUpdatePage.statusSelectLastOption();
    iSOrderUpdatePage.setCustidInput('custid');
    expect(await iSOrderUpdatePage.getCustidInput()).to.match(/custid/);
    iSOrderUpdatePage.setCreationDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await iSOrderUpdatePage.getCreationDateInput()).to.contain('2001-01-01T02:30');
    iSOrderUpdatePage.setPlacedDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await iSOrderUpdatePage.getPlacedDateInput()).to.contain('2001-01-01T02:30');
    iSOrderUpdatePage.setUpdateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await iSOrderUpdatePage.getUpdateDateInput()).to.contain('2001-01-01T02:30');
    await iSOrderUpdatePage.save();
    expect(await iSOrderUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
