// login_tests.spec.js

import { test, expect } from '@playwright/test';
import { Helpers } from '../utils/helpers';
import { Login } from '../pages/login';
import { Homepage } from '../pages/homepage';
import testData from '../utils/testData.json'; // ✅ Direkt import

test.describe.configure({ retries: 1 });

test.describe('Login Testler', () => {
    let helpers;
    let login;
    let homepage;

    test.beforeEach(async ({ page }) => {
        helpers = new Helpers(page);
        homepage = new Homepage(page);
        login = new Login(page);
        await page.goto('/');
    });

    test.only('TC-1) Bnext Login Olunur', async ({ page }) => {
        await homepage.anasayfa_Giris_butonuna_tiklanir();
        await helpers.fillInput(login.telefon_No_Inpt, testData.telefon_No);
        await login.dogrulamaKoduAlin_Butonuna_tiklanir();
        await login.dogrulamaKoduGir_Butonuna_tiklanir();
        await helpers.waitForTimeout(3000);
        await helpers.fillInput(login.sms_Dogrulama_Kodu_Inpt, testData.dogrulama_Kodu);
        await login.sms_dogrulama_onayla_Butonuna_tiklanir();
        await login.cikisYap_Butonuna_tiklanir();
    });
});
