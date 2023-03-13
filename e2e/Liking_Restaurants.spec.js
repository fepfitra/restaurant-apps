const assert = require('assert');
const { pause } = require('codeceptjs');

Feature('Liking Restaurants');

let EmptyMessage = '';

Scenario('showing empty restaurant', async ( I ) => {
  I.amOnPage('/#/like');
  I.waitForElement('.blank__message');
  I.seeElement('.blank__message');
  EmptyMessage = await I.grabTextFrom('.blank__message');
});

Scenario('liking one restaurant', async  ( I ) => {
  I.amOnPage('/');

  I.waitForElement('.resto__title a', 2);
  I.seeElement('.resto__title a');

  const firstResto = locate('.resto__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/like');
  I.waitForElement('.post-item', 2);
  I.seeElement('.post-item');

  const firstLikedResto = locate('.resto__title a').first();
  const firstLikedRestoTitle = await I.grabTextFrom(firstLikedResto);
  assert.strictEqual(firstRestoTitle, firstLikedRestoTitle);
});

Scenario('unlike the restaurant that has been liked before', async  ( I ) => {
  I.amOnPage('/');

  I.waitForElement('.resto__title a', 2);
  I.seeElement('.resto__title a');

  const firstResto = locate('.resto__title a').first();
  I.click(firstResto);

  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/like');
  I.waitForElement('.post-item', 2);
  I.seeElement('.post-item');

  const firstLikedResto = locate('.resto__title a').first();

  I.click(firstLikedResto);

  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/like');

  I.waitForElement('.blank__message', 2);
  I.seeElement('.blank__message');

  const CurrentEmptyMessage = await I.grabTextFrom('.blank__message');
  assert.strictEqual(EmptyMessage, CurrentEmptyMessage);
});

Scenario('add review', async ( I ) => {
  I.amOnPage('/');

  I.waitForElement('.resto__title a', 2);
  I.seeElement('.resto__title a');

  I.click(locate('.resto__title a').first());

  I.waitForElement('#add-review', 2);
  I.seeElement('#add-review');

  const review = 'e2e testing';

  I.fillField('input', 'Fitrafep');
  I.fillField('textarea', review);
  I.click('button[type="submit"]');

  I.waitForElement('#reviews', 2);
  I.seeElement('#reviews');
  const lastReview = locate('.reviews__item p').last();
  const lastReviewText = await I.grabTextFrom(lastReview);

  assert.strictEqual(review, lastReviewText);
})
