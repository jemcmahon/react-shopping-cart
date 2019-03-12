const expect = require('chai').expect;
const {Eyes, Target} = require('@applitools/eyes.webdriverio');
const eyes = new Eyes(); // Eyes("https://eyes.applitools.com", true);

const doEyes = typeof process.env.APPLITOOLS_API_KEY !== 'undefined' ? true : false
if (doEyes) eyes.setApiKey(process.env.APPLITOOLS_API_KEY);

describe('Shopping cart', () => {
  it('should add a product to cart and remove it', async function () {
    browser.url('process.env.REACT_APP_APP_URL');
    try {
      if (doEyes) await eyes.open(browser, 'RSC Wdio App', 'RSC Wdio', browser.getViewportSize()); // {width: 800, height: 600});
      browser.waitForText('.shelf-item');
      if (doEyes) await eyes.check('Cart', Target.window());

      /* Open float cart */
      browser.click('.bag--float-cart-closed');

      /* Bag should start with 0 products */
      browser.waitForText('.bag__quantity');
      let bagProductsQtd = browser.getText('.bag__quantity');
      if (doEyes)
        await eyes.check('Bag open', Target.window());
      else
        expect(bagProductsQtd).to.equal('0');

      /* Add a product to cart */
      browser.click('.shelf-item');
      browser.pause(100);

      /* And it should have 1 product in it now */
      bagProductsQtd = browser.getText('.bag__quantity');
      if (doEyes)
        await eyes.check('Quantity 1', Target.window());
      else
        expect(bagProductsQtd).to.equal('1');

      /* Remove the product from cart and now it should show 0 products in bag */
      browser.click('.shelf-item__del');
      browser.pause(100);
      bagProductsQtd = browser.getText('.bag__quantity');
      if (doEyes)
        await eyes.check('Quantity 0', Target.window());
      else
        expect(bagProductsQtd).to.equal('0');

      if (doEyes) await eyes.close();
    } finally {
      //await browser.end();
      if (doEyes) await eyes.abortIfNotClosed();
    }
  });
});

// vim:sw=2 ts=2 sts=0
