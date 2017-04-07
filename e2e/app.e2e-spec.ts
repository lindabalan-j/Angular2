import { OginPage } from './app.po';

describe('ogin App', () => {
  let page: OginPage;

  beforeEach(() => {
    page = new OginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
