import { test, expect } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePageDafiti from '../support/pages/HomePageDafiti';

test.describe('Home Dafiti', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homePage: HomePageDafiti;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.dafiti')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    homePage = new HomePageDafiti(page);
    await page.goto(BASE_URL);
  });

  test('Preencher barra de pesquisa', async () => {
    await homePage.searchProductByName();
    await expect(homePage.page).toHaveURL(/.*calcado.*/);
  });

  test('Ver roupas femininas', async () => {
    await homePage.filterFemClothes();
    await expect(homePage.page).toHaveURL(/.*feminino.*/);
  });

  test('Campo de pesquisa visível', async () => {
    const searchField = homePage.homeElements.getSearchField();
    await expect(searchField).toBeVisible();
  });

  test('Filtro feminino visível', async () => {
    const femClothesLink = homePage.homeElements.getFemClothes();
    await expect(femClothesLink).toBeVisible();
  });

  test('Logo da Dafiti visível', async () => {
    const logo = homePage.homeElements.getLogo();
    await expect(logo).toBeVisible();
  });

  test('Botão de login visível', async () => {
    const loginButton = homePage.homeElements.getLoginButton();
    await expect(loginButton).toBeVisible();
  });
  
});
