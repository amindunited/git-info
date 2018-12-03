/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const childProcess = require('../child-process-promise/child-process-promise');

const gitInfo = () => {

  return childProcess.exec('git branch')
    .then((result) => {
      const branch = result.match(/^\*.*.$/gm)[0].replace('* ', '');
    })
    .then(() => childProcess.exec('git log -1'))
    .then((result) => {
      const arr = result.split('\n');
      const obj = {};
      obj['commit'] = arr[0].replace('commit ', '');
      obj['author'] = arr[1].replace('Author: ', '');
      obj['date'] = arr[2].replace('Date: ', '');
      return obj;
    });
};

module.exports = gitInfo;

