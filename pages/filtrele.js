import { expect } from "@playwright/test";

export class Filtrele {
    constructor(page) {
        this.page = page;
        this.marka_Btn = page.getByRole('button', { name: 'Marka' })
        this.marka_BMW_checkbox = page.locator("input[id='BMW']");
        this.arabayiGoster_Btn = page.getByRole('button', { name: 'Arabayı Göster' });

    }

    async arabayi_Goster_butonuna_tiklanir() {
        await this.arabayiGoster_Btn.click();
    }


}