import { ClientDevPage } from './app.po';

describe('client-dev App', function() {
  let page: ClientDevPage;

  beforeEach(() => {
    page = new ClientDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
