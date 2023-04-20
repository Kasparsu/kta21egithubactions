describe('google', () => {
    beforeAll(async () => {
        await page.goto('https://google.com');
    });

    it('should display google text on page', async () => {
        await expect(page).toMatchTextContent('google');
    });
    it('should not display bing text on page', async () => {
        await expect(page).not.toMatchTextContent('bing');
    });
});