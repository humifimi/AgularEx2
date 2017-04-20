import { AngularExPage } from './app.po';

describe('angular-ex App', () => {
  let page: AngularExPage;

  beforeEach(() => {
    page = new AngularExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
