/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-env node */

const {join} = require('path');
const isProd = process.env.BUILD_ENV === 'production';
const prefix = isProd ? '/beta' : '';

const getPath = path => join(prefix, path);

const routes = [
  {
    text: 'Getting started',
    path: getPath('/getting-started'),
    children: [
      {
        text: 'Playground',
        path: getPath('/playground'),
      },
      {
        text: 'Versioning policy',
        path: getPath('/versioning-policy'),
      },
    ],
  },
  {
    text: 'Theming',
    path: getPath('/custom-themes'),
    children: [
      {
        text: 'Theming values',
        path: getPath('/theming-values'),
      },
      {
        text: 'Understanding Overrides',
        path: getPath('/understanding-overrides'),
      },
    ],
  },
  {
    components: true,
    text: 'Components',
    children: [
      {
        text: 'Basic Inputs',
        children: [
          {
            text: 'Button',
            path: getPath('/components/button'),
          },
          {
            text: 'ButtonGroup',
            path: getPath('/components/button-group'),
          },
          {
            text: 'Checkbox',
            path: getPath('/components/checkbox'),
          },
          {
            text: 'Input',
            path: getPath('/components/input'),
          },
          {
            text: 'Slider',
            path: getPath('/components/slider'),
          },
          {
            text: 'Radio',
            path: getPath('/components/radio'),
          },
          {
            text: 'Textarea',
            path: getPath('/components/textarea'),
          },
          {
            text: 'Unstable Datepicker',
            path: getPath('/components/datepicker'),
          },
        ],
      },
      {
        text: 'Navigation',
        children: [
          {
            text: 'Breadcrumbs',
            path: getPath('/components/breadcrumbs'),
          },
          {
            text: 'Header navigation',
            path: getPath('/components/header-navigation'),
          },
          {
            text: 'Pagination',
            path: getPath('/components/pagination'),
          },
          {
            text: 'Tab',
            path: getPath('/components/tabs'),
          },
        ],
      },
      {
        text: 'Content',
        children: [
          {
            text: 'Accordion',
            path: getPath('/components/accordion'),
          },
          {
            text: 'Avatar',
            path: getPath('/components/avatar'),
          },
          {
            text: 'Drag and Drop List',
            path: getPath('/components/dnd-list'),
          },
          {
            text: 'Icon',
            path: getPath('/components/icon'),
          },
          {
            text: 'Tag',
            path: getPath('/components/tag'),
          },
        ],
      },
      {
        text: 'Pickers',
        children: [
          {
            text: 'Menu',
            path: getPath('/components/menu'),
          },
          {
            text: 'Rating',
            path: getPath('/components/rating'),
          },
          {
            text: 'Select',
            path: getPath('/components/select'),
          },
        ],
      },
      {
        text: 'Progress & Validation',
        children: [
          {
            text: 'Notification',
            path: getPath('/components/notification'),
          },
          {
            text: 'ProgressBar',
            path: getPath('/components/progress-bar'),
          },
          {
            text: 'Progress steps',
            path: getPath('/components/progress-steps'),
          },
          {
            text: 'Spinner',
            path: getPath('/components/spinner'),
          },
          {
            text: 'Toast',
            path: getPath('/components/toast'),
          },
        ],
      },
      {
        text: 'Surfaces',
        children: [
          {
            text: 'Card',
            path: getPath('/components/card'),
          },
          {
            text: 'Modal',
            path: getPath('/components/modal'),
          },
          {
            text: 'Popover',
            path: getPath('/components/popover'),
          },
          {
            text: 'Tooltip',
            path: getPath('/components/tooltip'),
          },
        ],
      },
      {
        text: 'Utility',
        children: [
          {
            text: 'Block',
            path: getPath('/components/block'),
          },
        ],
      },
    ],
  },
];

export default routes;
export {getPath};
