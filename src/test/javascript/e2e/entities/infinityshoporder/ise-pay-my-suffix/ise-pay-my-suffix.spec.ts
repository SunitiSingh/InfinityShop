/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ISEPayComponentsPage from './ise-pay-my-suffix.page-object';
import ISEPayUpdatePage from './ise-pay-my-suffix-update.page-object';

const expect = chai.expect;

describe('ISEPay e2e test', () => {
  let navBarPage: NavBarPage;
  let iSEPayUpdatePage: ISEPayUpdatePage;
  let iSEPayComponentsPage: ISEPayComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load ISEPays', async () => {
    navBarPage.getEntityPage('ise-pay-my-suffix');
    iSEPayComponentsPage = new ISEPayComponentsPage();
    expect(await iSEPayComponentsPage.getTitle().getText()).to.match(/ISE Pays/);
  });

  it('should load create ISEPay page', async () => {
    iSEPayComponentsPage.clickOnCreateButton();
    iSEPayUpdatePage = new ISEPayUpdatePage();
    expect(await iSEPayUpdatePage.getPageTitle().getText()).to.match(/Create or edit a ISEPay/);
  });

  it('should create and save ISEPays', async () => {
    iSEPayUpdatePage.setEPayTypeInput('ePayType');
    expect(await iSEPayUpdatePage.getEPayTypeInput()).to.match(/ePayType/);
    iSEPayUpdatePage.setEPayTokenInput('ePayToken');
    expect(await iSEPayUpdatePage.getEPayTokenInput()).to.match(/ePayToken/);
    iSEPayUpdatePage.setCreateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await iSEPayUpdatePage.getCreateDateInput()).to.contain('2001-01-01T02:30');
    iSEPayUpdatePage.setUpdateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await iSEPayUpdatePage.getUpdateDateInput()).to.contain('2001-01-01T02:30');
    await iSEPayUpdatePage.save();
    expect(await iSEPayUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
