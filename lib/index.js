// 'use strict';

const npmCheck = require('./in.js');
const createState = require('./state/state.js');

function init(userOptions) {
    return createState(userOptions)
        .then(currentState => npmCheck(currentState));
}
module.exports = init;
