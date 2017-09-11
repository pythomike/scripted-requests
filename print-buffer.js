const https = require('https');

function getAndPrintHTML () {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, (response) => {

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
console.log(getAndPrintHTML())