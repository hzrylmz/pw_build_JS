import { test, expect } from '@playwright/test';
import { Helpers } from '../utils/helpers';
import { Homepage } from '../pages/homepage';   
import { Filtrele } from '../pages/filtrele';

test.describe.configure({retries:2})

test.describe('E2E Testler', () => {

    let helpers;
    let homepage;
    let filtrele;


    test.beforeEach(async ({ page }) => {
        helpers = new Helpers(page);
        homepage = new Homepage(page);  
        filtrele = new Filtrele(page);
        await page.goto('/');
    });

    test('TC-1) BMW Marka Filtre Testi', async ({ page }) => {
        //test.slow(); // timeout 3x
        await homepage.Header_ArabaAl_butonuna_tiklanir();
        await helpers.clickButton(filtrele.marka_Btn);
        await helpers.check(filtrele.marka_BMW_checkbox);
        await filtrele.arabayi_Goster_butonuna_tiklanir();
        // Use Playwright's built-in expect for URL assertion if Helpers.expectToHaveURL does not exist
        await expect(page).toHaveURL(/\/araba-al\/bmw/);
    });

});
