/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('1 showing empty liked restaurant', async ({ I }) => {
  I.see('Daftar Restoran Kosong', '.noFavorite');
});

Scenario('2 liking one restaurant', async ({ I }) => {
  I.see('Daftar Restoran Kosong', '.noFavorite');

  I.amOnPage('/');

  I.seeElement('.resto-item');

  const firstRestaurant = locate('.resto-item .resto-content a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click('.resto-item .resto-content a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const likedRestaurantName = await I.grabTextFrom('.resto-item .resto-content a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('3 unliking one restaurant', async ({ I }) => {
  I.see('Daftar Restoran Kosong', '.noFavorite');

  I.amOnPage('/');

  I.seeElement('.resto-item');

  const firstRestaurant = locate('.resto-item .resto-content a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click('.resto-item .resto-content a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const likedRestaurantName = await I.grabTextFrom('.resto-item .resto-content a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(locate('.resto-item .resto-content a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Daftar Restoran Kosong', '.noFavorite');
});
