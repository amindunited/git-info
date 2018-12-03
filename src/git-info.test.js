/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const fs = require('fs');
const gitInfo = require('./index');
const expect = require('chai').expect

describe('Git Info', () => {

  it('should export a function', () => {
    expect(gitInfo).to.be.a('function');
  });

  it('should ', () => {
    gitInfo().then((info) => {
      expect(info).to.be.an('object')
    })
  });

});
