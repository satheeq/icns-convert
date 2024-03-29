var converter = require('image-to-icon-converter');
var file = './app.ico';

converter.uploadConvertDownload(file, 'icns')
    .then(function(result) {
        // result is a URL to the resulting icon file
        console.log(result)
    });