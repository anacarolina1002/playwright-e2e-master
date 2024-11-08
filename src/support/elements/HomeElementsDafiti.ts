import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElementsDafiti extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getSearchField(): Locator {
    return this.page.getByRole('searchbox', { name: 'O que você procura?' })
  }

  getSearchButton(): Locator {
    return this.page.getByRole('button', { name: '' })
  }

  getFemClothes(): Locator {
    return this.page.getByRole('navigation').getByRole('link', { name: 'Feminino' })
  }
  
  getLogo(): Locator {
    return this.page.locator('.logo-dafiti-main');
  }

  getLoginButton(): Locator {
    return this.page.locator('text=Entrar');
  }

}
