const {test} = require('../../lib');

require('./lib');
require('./assert');
require('./err');
require('./insp');
require('./suite');
require('./test');
require('./util');
require('./static-interface');

test.cli({sync: true});
