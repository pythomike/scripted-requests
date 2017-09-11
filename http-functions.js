//const https = require('https');
//module.exports =                          //////
function getHTML (options, callback) {
  const https = require('https');
  https.get(options, (response) => {
    response.setEncoding('utf8');
    let myBuffer = '';
    response.on('data', (data) => {
      console.log('Chunk Received. Length:', data.length);
      myBuffer += data;
      //console.log(myBuffer);
    });
    response.on('end', function() {
      console.log('Response stream complete.');
      callback(myBuffer);
    });
    
  });
};
  
function printHTML (html) {
  console.log(html);
}

module.exports = getHTML

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
getHTML(requestOptions, printHTML);