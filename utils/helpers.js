import { expect } from "@playwright/test";

export class Helpers {

    constructor(page) {
        this.page = page;
    }




    async navigateTo(url) {
        await this.page.goto(url);
    }

    async clickButton(target) {
        if (typeof target === 'string') {
            await this.page.click(target);
        } else if (typeof target?.click === 'function') {
            await target.click();
        } else {
            throw new Error('clickButton: Invalid selector or locator');
        }
    }

    async check(target) {
        if (typeof target === 'string') {
            await this.page.check(target);
        } else if (typeof target?.check === 'function') {
            await target.check();
        } else {
            throw new Error('check: Invalid selector or locator');
        }
    }

    async fillInput(target, value) {
        if (typeof target === 'string') {
            await this.page.fill(target, value);
        } else if (typeof target?.fill === 'function') {
            await target.fill(value);
        } else {
            throw new Error('fillInput: Invalid selector or locator');
        }
    }

    async getText(selector) {
        return await this.page.textContent(selector);
    }

    async waitForSelector(selector) {
        await this.page.waitForSelector(selector);
    }

    async expectToBeVisible(selector) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async expectToHaveText(selector, text) {
        await expect(this.page.locator(selector)).toHaveText(text);
    }

    async expectToHaveURL(url) {
        await expect(this.page).toHaveURL(url);
    }

    async takeScreenshot(name) {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }

    async close() {
        await this.page.close();
    }

    async waitForTimeout(ms) {
        await this.page.waitForTimeout(ms);
    }

    async reloadPage() {
        await this.page.reload();
    }

    async goBack() {
        await this.page.goBack();
    }

    async goForward() {
        await this.page.goForward();
    }

    async setViewportSize(width, height) {
        await this.page.setViewportSize({ width, height });
    }

    async getCurrentURL() {
        return this.page.url();
    }   

    async getPageTitle() {
        return await this.page.title();
    }

    async clearInput(selector) {
        await this.page.fill(selector, '');
    }


    async isElementVisible(selector) {
        return await this.page.isVisible(selector);
    }

    async isElementEnabled(selector) {
        return await this.page.isEnabled(selector);
    }

    async isElementChecked(selector) {
        return await this.page.isChecked(selector);
    }


    async selectOption(selector, value) {
        await this.page.selectOption(selector, value);
    }

    async hoverElement(selector) {
        await this.page.hover(selector);
    }

    async scrollTo(selector) {
        await this.page.evaluate((sel) => {
            document.querySelector(sel).scrollIntoView();
        }, selector);
    }

    async uploadFile(selector, filePath) {
        await this.page.setInputFiles(selector, filePath);
    }

    async getAttribute(selector, attribute) {
        return await this.page.getAttribute(selector, attribute);
    }

    async waitForNavigation() {
        await this.page.waitForNavigation();
    }

    async waitForResponse(url) {
        await this.page.waitForResponse(response => response.url() === url && response.status() === 200);
    }

    async waitForRequest(url) {
        await this.page.waitForRequest(request => request.url() === url);
    }

    async getCookies() {
        return await this.page.context().cookies();
    }

    async setCookie(cookie) {
        await this.page.context().addCookies([cookie]);
    }

    async clearCookies() {
        const cookies = await this.page.context().cookies();
        await this.page.context().clearCookies(cookies);
    }

    async getPageSource() {
        return await this.page.content();
    }

    async switchToFrame(selector) {
        const frame = await this.page.frame(selector);
        if (!frame) {
            throw new Error(`Frame with selector ${selector} not found`);
        }
        return frame;
    }

    async switchToDefaultContent() {
        await this.page.mainFrame();
    }

    async executeScript(script) {
        return await this.page.evaluate(script);
    }

    async waitForElement(selector, timeout = 30000) {
        await this.page.waitForSelector(selector, { timeout });
    }

    async assertElementExists(selector) {
        const element = this.page.locator(selector);
        await expect(element).toBeVisible();
    }

    async assertElementNotExists(selector) {
        const element = this.page.locator(selector);
        await expect(element).not.toBeVisible();
    }

    async assertElementText(selector, expectedText) {
        const element = this.page.locator(selector);
        await expect(element).toHaveText(expectedText);
    }

    async assertElementAttribute(selector, attribute, expectedValue) {
        const element = this.page.locator(selector);
        const value = await element.getAttribute(attribute);
        expect(value).toBe(expectedValue);
    }

    async assertElementCount(selector, expectedCount) {
        const count = await this.page.locator(selector).count();
        expect(count).toBe(expectedCount);
    }

    async assertElementContainsText(selector, expectedText) {
        const element = this.page.locator(selector);
        await expect(element).toContainText(expectedText);
    }

    async assertElementNotContainsText(selector, unexpectedText) {
        const element = this.page.locator(selector);
        await expect(element).not.toContainText(unexpectedText);
    }

    async assertElementVisible(selector) {
        const element = this.page.locator(selector);
        await expect(element).toBeVisible();
    }

    async assertElementNotVisible(selector) {
        const element = this.page.locator(selector);
        await expect(element).not.toBeVisible();
    }
}

// helpers/uiActions.js

// 1. Dropdown'dan ilgili seçimi yap
export async function selectFromDropdown(dropdownElements, optionName) {
  const count = await dropdownElements.count();
  for (let i = 0; i < count; i++) {
    const text = await dropdownElements.nth(i).innerText();
    if (text.trim() === optionName) {
      await dropdownElements.nth(i).click();
      break;
    }
  }
}

export async function verifyElementsCount(elements, expectedCount) {
  await expect(elements).toHaveCount(expectedCount);
  const count = await elements.count();
  for (let i = 0; i < count; i++) {
    await expect(elements.nth(i)).toBeVisible();
  }
}



export async function checkAndCloseModal(page) {
  const modal = page.locator('.modal__content');
  if (await modal.count() > 0) {
    await page.locator("[xmlns='http://www.w3.org/2000/svg'] >> [d='M1 11L11 1']").click({ force: true });
  } else {
    console.log('Modal bulunamadı, tıklama yapılmadı.');
  }
}


export async function checkAndRejectCookies(page) {
  const cookiesDialog = page.locator('#ch2-dialog');
  if (await cookiesDialog.count() > 0) {
    await page.locator("//button[text()='TÜMÜNÜ REDDET']").click();
  } else {
    console.log('Çerezler bulunamadı.');
  }
}

export async function checkAndClickDynamic(page, selector, clickSelector) {
  const dynamicElement = page.locator(selector);
  if (await dynamicElement.count() > 0) {
    await page.locator(clickSelector).click({ force: true });
  } else {
    console.log(`Element ${selector} bulunamadı.`);
  }
}