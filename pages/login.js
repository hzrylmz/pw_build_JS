import { expect } from "@playwright/test";



export class Login {
    constructor(page) {
        this.page = page;
        this.telefon_No_Inpt = page.locator('input[type="tel"]')
        this.dogrulamaKoduAlin_Btn = page.getByRole('button', { name: 'Doğrulama Kodunu Alın' })
        this.dogrulamaKoduGir_Btn = page.getByRole('button', { name: 'Doğrulama Kodu Gir' })
        this.sms_Dogrulama_Kodu_Inpt = page.getByRole('textbox', { name: 'XXXX' })
        this.Onayla_Btn = page.getByRole('button', { name: 'Onayla' })
        this.profile_img_Btn = page.getByRole('img', { name: 'Profil' })
        this.cikisYap_Btn = page.getByRole('button', { name: 'Çıkış Yap' })

    }

    async anasayfa_Giris_butonuna_tiklanir() {
        await this.anasayfa_Giris_Btn.click();
    }

    async dogrulamaKoduAlin_Butonuna_tiklanir() {
        await this.dogrulamaKoduAlin_Btn.click();
    }

    async dogrulamaKoduGir_Butonuna_tiklanir() {
        await this.dogrulamaKoduGir_Btn.click();
    }

    async sms_dogrulama_onayla_Butonuna_tiklanir() {
        await this.Onayla_Btn.click();
    }

    async cikisYap_Butonuna_tiklanir() {
        await this.profile_img_Btn.click();
        await this.cikisYap_Btn.click();
    }


    


}