const fs = require('fs');
const path = require('path');
const mkdir = require('make-dir');

(async () => {
  const customPath = path.join(__dirname, '..', 'custom');

  const customDir = await mkdir(customPath);

  if (customDir) {
    const customJs = path.join(customDir, 'addon.js');
    const customCss = path.join(customDir, 'style.css');

    fs.closeSync(fs.openSync(customJs, 'w'));
    fs.closeSync(fs.openSync(customCss, 'w'));
  }
})();
