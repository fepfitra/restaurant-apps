const assert = require('assert');

Feature('Liking Restaurants');

Scenario('liking one restaurant and unlike it', async  ( I ) => {
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
});
