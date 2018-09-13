/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceOrderComponentsPage from './commerce-order-my-suffix.page-object';
import CommerceOrderUpdatePage from './commerce-order-my-suffix-update.page-object';

const expect = chai.expect;

describe('CommerceOrder e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceOrderUpdatePage: CommerceOrderUpdatePage;
  let commerceOrderComponentsPage: CommerceOrderComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceOrders', async () => {
    navBarPage.getEntityPage('commerce-order-my-suffix');
    commerceOrderComponentsPage = new CommerceOrderComponentsPage();
    expect(await commerceOrderComponentsPage.getTitle().getText()).to.match(/Commerce Orders/);
  });

  it('should load create CommerceOrder page', async () => {
    commerceOrderComponentsPage.clickOnCreateButton();
    commerceOrderUpdatePage = new CommerceOrderUpdatePage();
    expect(await commerceOrderUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceOrder/);
  });

  it('should create and save CommerceOrders', async () => {
    commerceOrderUpdatePage.statusSelectLastOption();
    commerceOrderUpdatePage.setCustidInput('custid');
    expect(await commerceOrderUpdatePage.getCustidInput()).to.match(/custid/);
    commerceOrderUpdatePage.setCreationDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await commerceOrderUpdatePage.getCreationDateInput()).to.contain('2001-01-01T02:30');
    commerceOrderUpdatePage.setPlacedDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await commerceOrderUpdatePage.getPlacedDateInput()).to.contain('2001-01-01T02:30');
    commerceOrderUpdatePage.setUpdateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await commerceOrderUpdatePage.getUpdateDateInput()).to.contain('2001-01-01T02:30');
    await commerceOrderUpdatePage.save();
    expect(await commerceOrderUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
