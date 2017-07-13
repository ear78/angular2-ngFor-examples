import { Angular2NgForExamplesPage } from './app.po';

describe('angular2-ng-for-examples App', () => {
  let page: Angular2NgForExamplesPage;

  beforeEach(() => {
    page = new Angular2NgForExamplesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
