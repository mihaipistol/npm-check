// 'use strict';

import npmCheck from './in.js';
import createState from './state/state.js';

export default function init(userOptions) {
    return createState(userOptions)
        .then(currentState => npmCheck(currentState));
}
