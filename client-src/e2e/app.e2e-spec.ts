import { ClientSrcPage } from './app.po';

describe('client-src App', function() {
  let page: ClientSrcPage;

  beforeEach(() => {
    page = new ClientSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
