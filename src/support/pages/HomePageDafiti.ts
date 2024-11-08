import { Page, expect } from '@playwright/test';
import HomeElementsDafiti from '../elements/HomeElementsDafiti'; // Importação correta do HomeElementsDafiti
import BasePage from './BasePage';

export default class HomePageDafiti extends BasePage {
  readonly homeElements: HomeElementsDafiti;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeElements = new HomeElementsDafiti(page);
  }

  async searchProductByName(): Promise<void> {
    await this.homeElements.getSearchField().fill('Sapato');
    await this.homeElements.getSearchButton().click();

    await expect(this.page).toHaveURL(/.*Sapato.*/);
  }

  async filterFemClothes(): Promise<void> {
    await this.homeElements.getFemClothes().click();

    await expect(this.page).toHaveURL(/.*feminino.*/);
  }
}
