describe("React application home page", () => {
   it("Verify that the app link says Learn React", async () => {
      await browser.url("/");
      let text = await $(".App-link");
      await text.waitForDisplayed({ timeout: 3000 });
      await expect(text).toHaveText("Learn React");
   });
});
