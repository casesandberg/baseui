/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* global module */
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';

import examples from './examples.js';
import HeaderNavigationReadme from './README.md';

Object.entries(examples).forEach(([description, example]) =>
  storiesOf('Header Navigation', module)
    .addDecorator(withReadme(HeaderNavigationReadme))
    // $FlowFixMe
    .add(description, example),
);
