/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import type {ThemeT} from '../styles/types.js';

export type TablePropsT = {|
  columns: Array<string>,
  // eslint-disable-next-line flowtype/no-weak-types
  data: Array<Array<React.Node>>,
  isLoading?: boolean,
|};

export type SharedStylePropsT = {|
  $theme: ThemeT,
|};
