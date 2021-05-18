/**
 * Copyright 2019 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const {
  verifySelectorsVisible,
} = require('../../../build-system/tasks/visual-diff/helpers');

module.exports = {
  'default inline attachment UI element should display': async (page, name) => {
    await page.waitForSelector('amp-story-page#inline-default[active]');
    await page.waitForTimeout(1600); // For animations to finish.
    await verifySelectorsVisible(page, name, [
      '.i-amphtml-story-inline-page-attachment-chip',
    ]);
  },

  'inline attachment UI element with custom text should display': async (
    page,
    name
  ) => {
    const screen = page.touchscreen;
    await screen.tap(200, 240);
    await page.waitForSelector('amp-story-page#inline-custom-text[active]');
    await page.waitForTimeout(400); // For animations to finish.
    await verifySelectorsVisible(page, name, [
      '.i-amphtml-story-inline-page-attachment-chip',
    ]);
   },
 };
