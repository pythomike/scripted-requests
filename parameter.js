const https = require('https');

function getAndPrintHTML(options) {
  https.get(options, (response) => {

    response.setEncoding('utf8');
    let myBuffer = '';
    response.on('data', (data) => {
      console.log('Chunk Received. Length:', data.length);
      myBuffer += data;
      console.log(myBuffer);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
