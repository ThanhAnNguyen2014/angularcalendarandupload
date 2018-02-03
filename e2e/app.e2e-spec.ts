import { CubecalendarPage } from './app.po';

describe('cubecalendar App', () => {
  let page: CubecalendarPage;

  beforeEach(() => {
    page = new CubecalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
