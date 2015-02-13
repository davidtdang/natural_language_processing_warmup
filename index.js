var request = require('request');
var _ = require('underscore')

request.get('http://www.gutenberg.org/cache/epub/11/pg11.txt', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var txt = body.replace(/\W+/g, " ");
    var text = txt.split(' ');
    var words = text.indexOf('II');
    var textweWant = text.slice(110,2304);
    var wordCount = textweWant.length;
    var uniqWordCount = _.uniq(textweWant).length;
    var typeToken = uniqWordCount / wordCount;
    var bigArray = [];
    ngrams(5, textweWant);
    console.log(bigArray);
    }

function ngrams (n, array) {
  var ngram = [];
  for (var i = 0; i < array.length; i++) {
    ngram = [];
    for (var l = 0; l < n; l++) {
      ngram.push(array[i + l]);
    }
    bigArray.push(ngram);
  }
}
});
