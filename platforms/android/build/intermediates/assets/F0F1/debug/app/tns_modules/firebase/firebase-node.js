/*! @license Firebase v4.1.1
Build: rev-ca0d1df
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

require('./auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TARGET_ENVIRONMENT is a build-time variable that is injected to create
// all of the variable environment outputs

// Import instance of FirebaseApp from ./app
require('./database-node');
var Storage = require('dom-storage');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
_app2.default.INTERNAL.extendNamespace({
    'INTERNAL': {
        'node': {
            'localStorage': new Storage(null, { strict: true }),
            'sessionStorage': new Storage(null, { strict: true }),
            'XMLHttpRequest': XMLHttpRequest
        }
    }
});
var AsyncStorage;

// Export the single instance of firebase
exports.default = _app2.default;
module.exports = exports['default'];
//# sourceMappingURL=firebase-node.js.map
