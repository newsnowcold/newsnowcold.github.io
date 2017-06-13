import { Newsnowcold.Github.IoPage } from './app.po';

describe('newsnowcold.github.io App', () => {
  let page: Newsnowcold.Github.IoPage;

  beforeEach(() => {
    page = new Newsnowcold.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
