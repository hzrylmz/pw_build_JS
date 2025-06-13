import { expect } from "@playwright/test";



export class Homepage {
    constructor(page) {
        this.page = page;
        this.ArabaAl_Btn_Header = page.getByRole('button', { name: 'Araba Al' });
        this.anasayfa_Giris_Btn = page.getByRole('button', { name: 'Giriş' })

    }


    async Header_ArabaAl_butonuna_tiklanir() {
        await this.ArabaAl_Btn_Header.click();
        await this.page.waitForURL(/\/araba-al/);
    }

    async anasayfa_Giris_butonuna_tiklanir() {
        await this.anasayfa_Giris_Btn.click();
    }


}