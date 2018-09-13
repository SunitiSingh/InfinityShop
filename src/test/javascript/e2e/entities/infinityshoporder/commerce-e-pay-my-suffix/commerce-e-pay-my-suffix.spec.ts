/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CommerceEPayComponentsPage from './commerce-e-pay-my-suffix.page-object';
import CommerceEPayUpdatePage from './commerce-e-pay-my-suffix-update.page-object';

const expect = chai.expect;

describe('CommerceEPay e2e test', () => {
  let navBarPage: NavBarPage;
  let commerceEPayUpdatePage: CommerceEPayUpdatePage;
  let commerceEPayComponentsPage: CommerceEPayComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load CommerceEPays', async () => {
    navBarPage.getEntityPage('commerce-e-pay-my-suffix');
    commerceEPayComponentsPage = new CommerceEPayComponentsPage();
    expect(await commerceEPayComponentsPage.getTitle().getText()).to.match(/Commerce E Pays/);
  });

  it('should load create CommerceEPay page', async () => {
    commerceEPayComponentsPage.clickOnCreateButton();
    commerceEPayUpdatePage = new CommerceEPayUpdatePage();
    expect(await commerceEPayUpdatePage.getPageTitle().getText()).to.match(/Create or edit a CommerceEPay/);
  });

  it('should create and save CommerceEPays', async () => {
    commerceEPayUpdatePage.setEPayTypeInput('ePayType');
    expect(await commerceEPayUpdatePage.getEPayTypeInput()).to.match(/ePayType/);
    commerceEPayUpdatePage.setEPayTokenInput('ePayToken');
    expect(await commerceEPayUpdatePage.getEPayTokenInput()).to.match(/ePayToken/);
    commerceEPayUpdatePage.setCreateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await commerceEPayUpdatePage.getCreateDateInput()).to.contain('2001-01-01T02:30');
    commerceEPayUpdatePage.setUpdateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await commerceEPayUpdatePage.getUpdateDateInput()).to.contain('2001-01-01T02:30');
    await commerceEPayUpdatePage.save();
    expect(await commerceEPayUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
