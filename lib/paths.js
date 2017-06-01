const path = require('path');

const root = path.join(__dirname, '..');

exports.BUILD = path.join(root, 'dist');
exports.SCRIPTS = path.join(root, 'app', 'scripts');
exports.STYLES = path.join(root, 'app', 'styles');
exports.VIEWS = path.join(root, 'app', 'views');
