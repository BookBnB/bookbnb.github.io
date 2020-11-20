/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    servicios: {
        Servicios: [
            'intro',
            {
                type: 'category',
                label: 'Front-end',
                collapsed: false,
                items: [
                    'app',
                    'back-office',
                ],
            },
            {
                type: 'category',
                label: 'Back-end',
                collapsed: false,
                items: [
                    'core',
                    'usuarios',
                    'pagos'
                ],
            },
        ],
    },
};


